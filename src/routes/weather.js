const express = require('express');
const axios = require('axios');
const formatResult = require('../utils/formatResult');
const url = require('../utils/url');
const CurrentWeather = require('../models/CurrentWeather');
const router = express.Router();

router.get('/', async (req, res) => {
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

module.exports = router;
