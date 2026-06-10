const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
   image: {
    type: DataTypes.STRING, 
    allowNull: false,
  }
});

module.exports = Category;
