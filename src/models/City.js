module.exports = class City {
  constructor({ city }) {
    this.name = city.name;
    this.country = city.country;
    this.timezone = city.timezone;
  }
};
