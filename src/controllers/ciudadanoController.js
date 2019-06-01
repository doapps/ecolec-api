const _ = require('lodash');
const { handleError } = require('../utils/helpers/expressHelper');


async function login(req, res) {
  const { db } = req.app;
  const { email, password } = req.body;
  try {
    const ciudadano = (await db
      .first('id', 'nombres', 'apellidos', 'email', 'password')
      .from('ciudadano')
      .where('email', email)) || {};
    if (_.isEmpty(ciudadano)) {
      return res.status(400).json({ message: 'Correo electrónico inválido' });
    }

    if (password !== ciudadano.password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    return res.json(ciudadano);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function crearPublicacion(req, res) {
  const { db } = req.app;
  const { id, latitude, longitude, categorias, photo } = req.body;

  try {
    const result = await db('publicacion').insert({
      latitud_ciudadano: latitude,
      longitud_ciudadano: longitude,
      estado: true,
      foto_basura: photo,
      ciudadano_id: id,
      papel: categorias.papel,
    });

    return res.json(result);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function listarRecolectores(req, res) {
  const { db } = req.app;

  try {
    const recolectores = await db('recolector');
    return res.json(recolectores);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function detalleRecolector(req, res) {
  const { db } = req.app;
  const { id } = req.params;

  try {
    const recolector = (await db
      .first('*')
      .from('recolector')
      .where('id', id)) || {};
    return res.json(recolector);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  login,
  crearPublicacion,
  listarRecolectores,
  detalleRecolector,
};
