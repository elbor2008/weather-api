require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const notFound = require('./middlewares/notFound');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

app.use('/', routes);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
