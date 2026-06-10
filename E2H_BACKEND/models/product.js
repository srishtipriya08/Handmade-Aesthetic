const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
   image: {
    type: DataTypes.STRING, 
    allowNull: false,
  }
});

module.exports = Product;
