const dotenv = require('dotenv');
dotenv.config();
require( './database');

const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

class App {
  constructor() {
    this.app = express();
    this.routes();
    this.middlewares();
  }
  routes() {
    this.app.use('/usuarios/', usuarioRoutes);
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json())
  }
}

module.exports = new App().app;