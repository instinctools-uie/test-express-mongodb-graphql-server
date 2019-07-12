'use strict';

module.exports = {
  newBook: {
    subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('book-created')
  }
};
