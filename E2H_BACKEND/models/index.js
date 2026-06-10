const sequelize = require('../config/db');
const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const Category = require('./category');

// Define associations
// User.hasMany(Post, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Product,
  Order,
  Category,
};
