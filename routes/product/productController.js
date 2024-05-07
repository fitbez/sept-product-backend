const Product = require("../../models/product/product");

// POST OR ADDING PRODUCT IN OUR DB
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log("success");
    res.status(201).send(product);
  } catch (error) {
    console.log("failure");
    res.status(400).send(error);
  }
};

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// DELETE A PRODUCT
const deleteProduct = async (req, res) => {
  try {
    console.log("req.parms", req.params);
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("The Item is deleted successufly");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addProduct, getProducts, deleteProduct };
