'use strict';

/**
 * @module Constants
 *
 * @desc Global application constant values
 */

/**
 * Node environment modes
 *
 * @type {Object}
 * @constant
 */
const ENV_MODES = {
  TEST: 'test',
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
};

/**
 * Server port
 * @type {Number}
 * @constant
 */
const PORT = 3003;

/**
 * MongoDB connection url
 * @type {String}
 * @constant
 */
const MONGO_CONNECTION_URL = process.env.NODE_ENV === ENV_MODES.DEVELOPMENT ?
  'mongodb://localhost:27017/library' :
  'mongodb://mongo:27017/library';

module.exports = {
  PORT,
  MONGO_CONNECTION_URL,
  ENV_MODES
};