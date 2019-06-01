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

module.exports = {
  login,
};
