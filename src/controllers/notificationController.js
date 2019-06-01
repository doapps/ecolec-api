const axios = require('axios');
const config = require('../config/config');
const { handleError } = require('../utils/helpers/expressHelper');

const { fcm: { serverKey } } = config;

function sample(req, res) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `key=${serverKey}`,
    },
  };

  axios.post('https://fcm.googleapis.com/fcm/send', {
    to: '/topics/bitel',
    notification: {
      title: 'title',
      body: 'body',
    },
  }, config)
    .then((res) => {
      console.log(`--> statusCode: ${res.statusCode}`);
      console.log(res);
    })
    .catch((error) => {
      console.log(`--> error`);
      console.error(error);
    });

  res.status(200).json({ message: 'ok' });
}

async function test(req, res) {
  const { db } = req.app;
  const { month, year } = req.body;
  const { id } = req.params;

  try {
    const attendances = await db.select('check_in', 'check_out', 'status', 'has_justification').from('attendance')
      .whereRaw(`YEAR(register_date) = ${year}`)
      .whereRaw(`MONTH(register_date) = ${month}`)
      .whereRaw(`employee_id = ${id}`);

    if (attendances.length === 0) {
      return res.status(400).json({ message: 'Este usuario no tiene asistencias en el mes seleccionado' });
    }
    return res.status(200).json(attendances);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  test,
  sample,
};
