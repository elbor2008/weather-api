const express = require('express');
const weatherRoute = require('./routes/weather');
const forecastRoute = require('./routes/forecast');

const router = express.Router();

router.use('/api/weather', weatherRoute);
router.use('/api/forecast', forecastRoute);

module.exports = router;
