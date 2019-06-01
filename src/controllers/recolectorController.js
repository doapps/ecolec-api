const _ = require('lodash');
const axios = require('axios');
const config = require('../config/config');
const { handleError } = require('../utils/helpers/expressHelper');

const { fcm: { serverKey } } = config;

function sendNotification(token) {
  const configs = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `key=${serverKey}`,
    },
  };

  axios.post('https://fcm.googleapis.com/fcm/send', {
    to: token,
    notification: {
      title: 'Ecolec',
      body: 'Un recolector ha aceptado tu solicitud',
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
  const { papel, vidrio, plastico, metal } = req.body;

  try {
    const publicaciones = (await db('publicacion')
      .orWhere('estado', true)
      .orWhere('papel', papel)
      .orWhere('vidrio', vidrio)
      .orWhere('plastico', plastico)
      .orWhere('metal', metal)
    ) || [];
    return res.json(publicaciones);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function aceptarRecojo(req, res) {
  const { db } = req.app;
  const { id, publicacion_id, latitude, longitude } = req.body;

  try {
    const result = await db('publicacion')
      .where({ id: publicacion_id })
      .update({
        recolector_id: id,
        latitud_recolector: latitude,
        longitud_recolector: longitude,
        estado: false,
      });

    const ciudadano = await db.select('c.token').from('publicacion AS p')
      .innerJoin('ciudadano AS c', 'p.ciudadano_id', 'c.id')
      .where('p.id', publicacion_id);

    const ciudadanoToken = ciudadano[0].token;
    sendNotification(ciudadanoToken);

    if (result) {
      return res.json({ message: 'El recojo se te ha asignado, dirígete al punto indicado' });
    }
    return res.status(400).json(result);
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
