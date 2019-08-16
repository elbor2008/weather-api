module.exports = class CurrentWeather {
  constructor({ weather, main, wind }) {
    this.main = weather[0].main;
    this.description = weather[0].description;
    this.icon = weather[0].icon;
    this.temp = main.temp;
    this.pressure = main.pressure;
    this.humidity = main.humidity;
    this.minTemp = main.temp_min;
    this.maxTemp = main.temp_max;
    this.speed = wind.speed;
  }
};
