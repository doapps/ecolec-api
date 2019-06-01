const axios = require('axios');
const config = require('../config/config');
const { handleError } = require('../utils/helpers/expressHelper');

const { fcm: { serverKey } } = config;

function sendNotificationByTopic(topic) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `key=${serverKey}`,
    },
  };

  axios.post('https://fcm.googleapis.com/fcm/send', {
    to: `/topics/${sendNotification}`,
    notification: {
      title: 'title',
      body: 'body',
    },
  }, config)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

function sendNotification(token) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `key=${serverKey}`,
    },
  };

  axios.post('https://fcm.googleapis.com/fcm/send', {
    to: token,
    notification: {
      title: 'title',
      body: 'body',
    },
  }, config)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = {
  sendNotificationByTopic,
};
