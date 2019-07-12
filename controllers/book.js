'use strict';

const BookModel = require('../db/models/book');

/**
 * Get all books or by identifiers
 *
 * @param {Array<String>} [ids] - Book identifiers
 * @param {Number} limit - Limit of data
 * @param {Number} offset - Offset of data
 *
 * @return {Object} Promise with result
 */
function getBooks(ids, limit, offset) {
  const query = Array.isArray(ids) ? { _id: { $in: ids } } : {};

  return BookModel.find(query, null, { skip: offset, limit });
}

/**
 * Get book by identifier
 *
 * @param {String} id - Book identifier
 *
 * @return {Object} Promise with result
 */
function getBook(id) {
  return BookModel.findById(id);
}

/**
 * Create new book
 *
 * @param {Object} input - Book input data
 *
 * @return {Object} Promise with result
 */
function createBook(input) {
  return BookModel.create(input);
}

/**
 * Update book by identifier
 *
 * @param {Object} input - Book updated input data
 *
 * @return {Object} Promise with result
 */
function updateBook(input) {
  return BookModel.findByIdAndUpdate(input.id, { $set: input }, { useFindAndModify: false })
    .then(updatedItem => ({ ...updatedItem.toObject(), ...input }));
}

/**
 * Remove book by identifier
 *
 * @param {String} id - Book identifier
 *
 * @return {Object} Promise with result
 */
function removeBook(id) {
  return BookModel.findByIdAndRemove(id, { useFindAndModify: false });
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  removeBook
};