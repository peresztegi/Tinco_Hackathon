const axios = require('axios');

const fb_token = 'EAAESxbjsnZBABAB6N66Jnyw1BxE0NkvCwJInqYqS0gPdOCZCgc5uBKOGBZBOUw25eiWqWmZBnVVfeauU3wxJG3GrwclhpoLbzpd2f4ZAp8ajZANiFbR1ClnXDUgs1ZA4m6ZBBAyX01gle5oYPiXpiZCFfIzu9EZBO10902evWHDdPlJAZDZD';

module.exports.fb_send_message = function (data, header = {}) {
  return axios.post('https://graph.facebook.com/v2.6/me/messages?access_token=' + fb_token, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

