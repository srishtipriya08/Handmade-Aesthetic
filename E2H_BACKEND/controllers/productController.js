const { response } = require("express");
const { Product } = require("../models");

exports.getProducts = async (req, res) => {
  const products = await Product.findAll({
    order: [["id", "ASC"]],
  });
  res.json(products);
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Fetching product with ID: ${id}`);
    
    const product = await Product.findByPk(id);
    console.log(`Product found:`, product);
    
    if (!product) {
      // List all available products for debugging
      const allProducts = await Product.findAll();
      console.log(`Available products:`, allProducts.map(p => ({ id: p.id, name: p.product_name })));
      return res.status(404).json({ error: `Product with ID ${id} not found`, availableIds: allProducts.map(p => p.id) });
    }
    
    res.json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({data: product, message: "Product Saved Successfully"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Not found" });
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Not found" });
    await product.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
