const _ = require('lodash');
const axios = require('axios');
const config = require('../config/config');
const { handleError } = require('../utils/helpers/expressHelper');

const { fcm: { serverKey } } = config;

function sendNotificationByTopic(topic) {
  const configs = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `key=${serverKey}`,
    },
  };

  axios.post('https://fcm.googleapis.com/fcm/send', {
    to: `/topics/${topic}`,
    notification: {
      title: 'Ecolec',
      body: 'Hay una nueva solicitud de reciclaje',
    },
  }, configs)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

async function login(req, res) {
  const { db } = req.app;
  const { email, password, token } = req.body;
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

    await db('ciudadano')
      .where({ email })
      .update({
        token,
      });
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
      vidrio: categorias.vidrio,
      plastico: categorias.plastico,
      metal: categorias.metal,
    });

    sendNotificationByTopic('ecolec');

    if (result) {
      return res.json({ message: 'Se realizó la publicación, en instantes un recolector será asignado' });
    }
    return res.status(400).json(result);
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
