const Usuario = require('../models/Usuario');

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      const { id, nome, email, bio, description } = novoUsuario;
      return res.json({id, nome, email, bio, description});
    }catch(e) {
      console.log(e)
        // return res.status(400).json({
        //   errors: e.errors.map( err => err.message),
        // });
    }
  }

  async index(req, res) {
    try{
      const usuario = await Usuario.findAll({ attributes: ['id', 'nome', 'email', 'bio', 'description'] });
      return res.json(usuario);
    }catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      const { id, nome, email, bio, description} = usuario
      return res.json({ id, nome, email, bio, description})
    }catch (e){
      return(null);
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await usuario.update(req.body);
      const { id, nome, email, bio, description } = novosDados;
      return res.json({ id, nome, email,  bio, description  });
    }catch(e) {
      console.log(e)
      // return res.status(400).json({
      //  errors: e.errors.map( err => err.message),
      // });
    }
  }
}


module.exports = new UsuarioController();