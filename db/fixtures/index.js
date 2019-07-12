'use strict';

const AuthorModel = require('../models/author');
const BookModel = require('../models/book');

const AUTHORS = [
  {
    _id: '5d233dd025940833f563b4d1',
    firstName: 'Jane',
    lastName: 'Austen',
    books: ['5d233dd025940833f563b4d3']
  },
  {
    _id: '5d233dd025940833f563b4d2',
    firstName: 'Theresa',
    lastName: 'Lang',
    books: ['5d233dd025940833f563b4d4']
  }
];

const BOOKS = [
  {
    _id: '5d233dd025940833f563b4d3',
    name: 'Pride and Prejudice',
    author: '5d233dd025940833f563b4d1',
    genre: 'Classic'
  },
  {
    _id: '5d233dd025940833f563b4d4',
    name: 'The Mindset and Skillset',
    author: '5d233dd025940833f563b4d2',
    genre: 'Dramaturgy'

  }
];

/**
 * Fixtures for test the application
 *
 * @return {void}
 */
async function loadFixtures() {
  try {
    await AuthorModel.deleteMany();
    await BookModel.deleteMany();

    await AuthorModel.create(AUTHORS);
    await BookModel.create(BOOKS);
  } catch (error) {
    console.error(error);
  }
}

module.exports = loadFixtures;