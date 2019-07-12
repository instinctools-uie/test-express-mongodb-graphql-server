'use strict';

const { ApolloServer, PubSub  } = require('apollo-server-express');
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pubsub }, // TODO: Add auth token validation to context function
  validationRules: [
    depthLimit(3),
    createComplexityLimitRule(1000, {
      onCost: cost => console.info('Query cost: ', cost)
    })
  ]
});

module.exports = server;
