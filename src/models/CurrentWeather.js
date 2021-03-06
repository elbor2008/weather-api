const d2d = require('degrees-to-direction');

module.exports = class CurrentWeather {
  constructor({ weather, main, wind, rain }) {
    this.main = weather[0].main;
    this.description = weather[0].description;
    this.icon = weather[0].icon;
    this.temp = main.temp;
    this.pressure = main.pressure;
    this.humidity = main.humidity;
    this.minTemp = main.temp_min;
    this.maxTemp = main.temp_max;
    this.windSpeed = wind.speed;
    this.windDirection = d2d(wind.deg);
    this.rainVolume = rain ? rain['3h'] : '';
  }
};
