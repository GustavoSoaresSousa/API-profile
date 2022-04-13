const dotenv = require('dotenv');
dotenv.config();
require( './database');

const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }
  middleware(){
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  
  routes() {
    this.app.use('/usuarios/', usuarioRoutes);
  }
}

module.exports = new App().app;