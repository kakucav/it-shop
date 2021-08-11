import Category from '../models/Category.js';

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  try {
    let category = await Category.findOne({ name });

    if (category) {
      return res.status(400).json({ errorMessage: `Kategorija ${name} već postoji!` });
    }

    category = new Category(req.body);
    await category.save();

    res.status(201).json({ successMessage: `Kategorija ${name} uspješno kreirana.` });
  } catch (error) {
    res.status(500).json({ errorMessage: 'Greška na serveru!' });
  }
};

export { createCategoryController };
