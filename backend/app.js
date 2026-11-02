require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

sequelize
  .sync() // en desarrollo, si cambian un modelo: sync({ alter: true })
  .then(() => {
    console.log('Base de datos conectada y tablas creadas');
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Error al conectar con MySQL:', err));