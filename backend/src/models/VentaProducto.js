const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VentaProducto = sequelize.define('VentaProducto', {
  cantidad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  precioUnitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

module.exports = VentaProducto;