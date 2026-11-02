const sequelize = require('../config/database');
const Producto = require('./Producto');
const Usuario = require('./Usuario');
const Venta = require('./Venta');
const VentaProducto = require('./VentaProducto');

Venta.belongsToMany(Producto, { through: VentaProducto, foreignKey: 'ventaId' });
Producto.belongsToMany(Venta, { through: VentaProducto, foreignKey: 'productoId' });

module.exports = { sequelize, Producto, Usuario, Venta, VentaProducto };