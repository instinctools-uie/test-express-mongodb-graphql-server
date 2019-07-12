'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    books: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }],
    created: {
      type: String,
      default: new Date()
    }
  }
);

const Author = mongoose.model('Author', ModelSchema);

module.exports = Author;
