const express = require('express');
const axios = require('axios');
const formatResult = require('../utils/formatResult');
const url = require('../utils/url');
const CurrentWeather = require('../models/CurrentWeather');
const City = require('../models/City');
const Weather = require('../models/Weather');
const router = express.Router();

router.get('/weather', async (req, res) => {
  const { city } = req.query;
  try {
    const { data } = await axios.get(url.weather, {
      params: {
        q: city
      }
    });
    formatResult(200, null, new CurrentWeather(data), res);
  } catch (error) {
    formatResult(400, 'fetching weather error', null, res);
  }
});
router.get('/forecast', async (req, res) => {
  const { city } = req.query;
  try {
    const { data } = await axios.get(url.forecast, {
      params: {
        q: city
      }
    });
    const cityDetail = new City(data);
    const { list } = data;
    const weathers = list.map(item => new Weather(item));
    formatResult(
      200,
      null,
      {
        city: cityDetail,
        weathers
      },
      res
    );
  } catch (error) {
    formatResult(400, 'fetching forecast error', null, res);
  }
});

module.exports = router;
