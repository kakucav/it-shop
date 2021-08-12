import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ errorMessage: 'Autorizacija odbijena!' });
  }

  try {
    const { JWT_SECRET } = process.env;
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded.user;

    next();
  } catch (error) {
    res.status(401).json({ errorMessage: 'Autorizacija odbijena!' });
  }
};

export default authenticateJWT;
