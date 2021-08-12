import Product from '../models/Product.js';

const create = async (req, res) => {
  const { name } = req.body;
  const { filename } = req.file;

  try {
    let product = await Product.findOne({ name });
    if (product) {
      return res.status(400).json({ errorMessage: `Proizvod ${name} već postoji!` });
    }

    product = new Product(req.body);
    product.image = filename;
    await product.save();

    res.status(201).json({ successMessage: `Proizvod ${name} uspješno kreiran.` });
  } catch (error) {
    res.status(500).json({ errorMessage: 'Greška na serveru!' });
  }
};

export { create };
