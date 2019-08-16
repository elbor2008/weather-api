require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const notFound = require('./middlewares/notFound');
const weatherRoute = require('./routes/weather');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

app.use('/', weatherRoute);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
