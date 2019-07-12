'use strict';

const AuthorModel = require('../db/models/author');

/**
 * Get all authors
 *
 * @param {Array<String>} [ids] - Author identifiers
 * @param {Number} limit - Limit of data
 * @param {Number} offset - Offset of data
 *
 * @return {Object} Promise with result
 */
function getAuthors(ids, limit, offset) {
  const query = Array.isArray(ids) ? { _id: { $in: ids } } : {};

  return AuthorModel.find(query, null, { skip: offset, limit });
}

/**
 * Get author by identifier
 *
 * @param {String} id - Author identifier
 *
 * @return {Object} Promise with result
 */
function getAuthor(id) {
  return AuthorModel.findById(id);
}

/**
 * Create new author
 *
 * @param {Object} input - Author input data
 *
 * @return {Object} Promise with result
 */
function createAuthor(input) {
  return AuthorModel.create(input);
}

/**
 * Update author by identifier
 *
 * @param {Object} input - Author updated input data
 *
 * @return {Object} Promise with result
 */
function updateAuthor(input) {
  return AuthorModel.findByIdAndUpdate(input.id, { $set: input }, { useFindAndModify: false })
    .then(updatedItem => ({ ...updatedItem.toObject(), ...input }));
}

/**
 * Remove author by identifier
 *
 * @param {String} id - Author identifier
 *
 * @return {Object} Promise with result
 */
function removeAuthor(id) {
  return AuthorModel.findByIdAndRemove(id, { useFindAndModify: false });
}

module.exports = {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  removeAuthor
};