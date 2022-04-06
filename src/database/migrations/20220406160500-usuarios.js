module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable('usuarios', {
   id: {
     type: Sequelize.INTEGER,
     allowNull: false,
     autoIncrement: true,
     primaryKey: true,
   },
   nome: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   email: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   password_hash: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   bio: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   description: {
     type: Sequelize.STRING,
     allowNull: false,
    },
   created_at: {
     type: Sequelize.DATE,
     allowNull: false,
   },
   updated_at: {
     type: Sequelize.DATE,
     allowNull: false,
   },
 }),

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('usuarios'),  
};
