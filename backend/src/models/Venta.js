const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venta = sequelize.define('Venta', {
  nombreCliente: { type: DataTypes.STRING(80), allowNull: false },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

module.exports = Venta;