'use strict';

const { GraphQLScalarType } = require('graphql');

const { getBooks } = require('../../controllers/book');
const { getAuthor } = require('../../controllers/author');

module.exports = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'A valid date time value.',
    parseValue: value => new Date(value),
    serialize: value => new Date(value).toISOString(),
    parseLiteral: ast => ast.value
  }),
  Author: {
    books: (parent) => getBooks(parent.books)
  },
  Book: {
    author: (parent) => getAuthor(parent.author)
  }
};

