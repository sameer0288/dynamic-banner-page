const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bannerRoutes = require('./routes/bannerRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', bannerRoutes);

module.exports = app;
