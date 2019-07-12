'use strict';

const { getAuthors, getAuthor } = require('../../controllers/author');
const { getBooks, getBook } = require('../../controllers/book');

module.exports = {
  author: (root, { id }) => getAuthor(id),
  authors: (root, { ids, limit, offset }) => getAuthors(ids, limit, offset),
  book: (root, { id }) => getBook(id),
  books: (root, { ids, limit, offset }) => getBooks(ids, limit, offset)
};
