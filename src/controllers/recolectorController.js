const _ = require('lodash');
const { handleError } = require('../utils/helpers/expressHelper');


async function login(req, res) {
  const { db } = req.app;
  const { email, password } = req.body;
  try {
    const recolector = (await db
      .first('id', 'nombres', 'apellidos', 'email', 'password')
      .from('recolector')
      .where('email', email)) || {};
    if (_.isEmpty(recolector)) {
      return res.status(400).json({ message: 'Correo electrónico inválido' });
    }

    if (password !== recolector.password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    return res.json(recolector);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function listarPuntosRecojo(req, res) {
  const { db } = req.app;

  try {
    const publicaciones = (await db('publicacion')) || [];
    return res.json(publicaciones);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function aceptarRecojo(req, res) {
  const { db } = req.app;

  try {
    const recolectores = await db('recolector');
    return res.json(recolectores);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  login,
  listarPuntosRecojo,
  aceptarRecojo,
};
