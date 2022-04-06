const { Sequelize, Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [0, 20],
            msg: 'Campo nome deve ter entre 1 e 20 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [0, 20],
            msg: 'E-mail inválido'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,

      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: "",
        validate: {
          len: {
            args: [0, 20],
            msg: 'A senha precisa ter entre 1 e 20 caracteres'
          }
        }
      },
      bio: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [0, 30],
            msg: 'Preencha sua bio'
          }
        }
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [0, 255],
            msg: 'Coloque uma descrição no seu usuario'
          }
        }
      },
    },{
      sequelize,
    });
    this.addHook('beforeSave', async usuario => {
      if(usuario.password){
        usuario.password_hash = await bcrypt.hash(usuario.password, 8);
      }
    } )

    return this;
  }
}