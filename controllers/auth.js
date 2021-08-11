import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const { JWT_SECRET, JWT_EXPIRE } = process.env;

const registerController = async (req, res) => {
  const { username, email } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ errorMessage: 'Korisničko ime je zauzeto!' });
    }

    user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errorMessage: 'Email adresa je zauzeta!' });
    }

    user = new User(req.body);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.status(201).json({ successMessage: 'Registracija uspješna, sada se možete prijaviti.' });
  } catch (error) {
    res.status(500).json({ errorMessage: 'Greška na serveru!' });
  }
};

const loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ errorMessage: 'Pogrešno korisničko ime ili lozinka!' });
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
      return res.status(400).json({ errorMessage: 'Pogrešno korisničko ime ili lozinka!' });
    }

    const { _id, email, role, address = {} } = user;

    const token = jwt.sign({ user: { _id: user._id } }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

    res.json({ token, user: { _id, username, email, role, address } });
  } catch (error) {
    res.status(500).json({ errorMessage: 'Greška na serveru!' });
  }
};

export { registerController, loginController };
