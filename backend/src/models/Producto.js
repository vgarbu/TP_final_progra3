const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  categoria: { type: DataTypes.ENUM('club', 'seleccion'), allowNull: false },
  equipo: { type: DataTypes.STRING(80), allowNull: false },
  temporada: { type: DataTypes.STRING(20), allowNull: false },
  esRetro: { type: DataTypes.BOOLEAN, defaultValue: false },
  imagen: { type: DataTypes.STRING(255), allowNull: true },
  activo: { type: DataTypes.BOOLEAN, defaultValue: true },
});

module.exports = Producto;