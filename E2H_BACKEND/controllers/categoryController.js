const { response } = require("express");
const { Category, Product } = require("../models");

exports.getCategory = async (req, res) => {
  const category = await Category.findAll({
    order: [["id", "ASC"]],
  });
  res.json(category);
};

exports.getCategoryWithProducts = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get the category by ID
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Get all products that match this category
    const products = await Product.findAll({
      where: { product_category: category.category_name },
      order: [["id", "ASC"]],
    });

    res.json({
      category_name: category.category_name,
      products: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({data: category , message: "Category Saved Successfully"});
   
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};