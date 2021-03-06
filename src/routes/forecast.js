const express = require('express');
const axios = require('axios');
const formatResult = require('../utils/formatResult');
const url = require('../utils/url');
const City = require('../models/City');
const Weather = require('../models/Weather');
const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city || 'hobart';
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
