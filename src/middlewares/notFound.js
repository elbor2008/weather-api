const formatResult = require('../utils/formatResult');

module.exports = (req, res) => formatResult(404, 'api not found', null, res);
