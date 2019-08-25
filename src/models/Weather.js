const CurrentWeather = require('./CurrentWeather');

module.exports = class Weather extends CurrentWeather {
  constructor({ weather, main, wind, rain, dt_txt, dt }) {
    super({ weather, main, wind, rain });
    this.datetime = dt_txt;
    this.dt = dt;
  }
};
