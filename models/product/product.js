const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Product = sequelize.define("prodItems", {
  product_name: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.STRING,
  image: DataTypes.STRING,
  onSale: DataTypes.BOOLEAN,
});

Product.sync(); // This line ensures the table is created if it doesn't exist already

module.exports = Product;
