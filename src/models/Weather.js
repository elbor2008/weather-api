const CurrentWeather = require('./CurrentWeather');

module.exports = class Weather extends CurrentWeather {
  constructor({ weather, main, wind, dt_txt }) {
    super({ weather, main, wind });
    this.datetime = dt_txt;
  }
};
