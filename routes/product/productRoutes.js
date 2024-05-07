// productRoutes.js
const express = require("express");
const {
  addProduct,
  getProducts,
  deleteProduct,
} = require("./productController");

const router = express.Router();

router.post("/product", addProduct);
router.get("/products", getProducts);
router.delete("/product/:id", deleteProduct);

module.exports = router;
