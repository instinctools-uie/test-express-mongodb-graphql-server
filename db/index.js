'use strict';

const mongoose = require('mongoose');

const { MONGO_CONNECTION_URL } = require('../constants');
const loadFixtures = require('./fixtures');

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_CONNECTION_URL, { useNewUrlParser: true });
mongoose.connection
  .on('open', () => {
    console.log(`Connected to mongo at ${MONGO_CONNECTION_URL}`);
    loadFixtures();
  })
  .on('error', error => {
    throw error;
  });

module.exports = mongoose;
