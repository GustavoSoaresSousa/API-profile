const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');

const Usuario = require('../models/Usuario');



const models = [Usuario];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));