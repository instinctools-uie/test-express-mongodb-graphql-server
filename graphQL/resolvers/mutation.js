'use strict';

const { createAuthor, updateAuthor, removeAuthor } = require('../../controllers/author');
const { createBook, updateBook, removeBook } = require('../../controllers/book');

module.exports = {
  createAuthor: async (root, { input }) => await createAuthor(input),
  updateAuthor: async (root, { input }) => await updateAuthor(input),
  removeAuthor: async (root, { id }) => await removeAuthor(id),

  async createBook(root, { input }, { pubsub }) {
    const newBook = await createBook(input);
    pubsub.publish('book-created', { newBook });
    return newBook;
  },
  updateBook: async (root, { input }) => await updateBook(input),
  removeBook: async (root, { id }) => await removeBook(id).then(result => result || { id })
};
