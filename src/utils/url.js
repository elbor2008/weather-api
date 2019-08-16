require('dotenv').config();

module.exports = {
  weather:
    'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=' +
    process.env.APPID,
  forecast:
    'http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=' +
    process.env.APPID
};
