const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  nombre: { type: DataTypes.STRING(80), allowNull: false },
  email: { type: DataTypes.STRING(120), allowNull: false, unique: true },
  password: { type: DataTypes.STRING(255), allowNull: false }, // guarda el HASH de bcrypt
});

module.exports = Usuario;