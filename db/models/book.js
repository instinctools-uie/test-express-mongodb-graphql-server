'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    name: String,
    created: {
      type: Date,
      default: new Date
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author'
    },
    genre: {
      type: String,
      enum: ['Dramaturgy', 'Classic']
    }
  }
);

const Book = mongoose.model('Book', ModelSchema);

module.exports = Book;
