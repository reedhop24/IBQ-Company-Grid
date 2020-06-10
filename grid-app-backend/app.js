const express = require('express');
const cors = require('cors');
const port = 800;
const mongoose = require('mongoose');
const post = require('./routes/route');
var app = express();
require('dotenv/config');

app.use(cors());
app.use('/', post);

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db'));

app.listen(800, () => {
    console.log('server running on ' + port);
});