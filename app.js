'use strict';

const express = require('express');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');

require('./db');

const { PORT } = require('./constants');
const routes = require('./routes');
const graphQLServer = require('./graphQL');

const app = express();
const httpServer = createServer(app);

httpServer.timeout = 5000;

graphQLServer.applyMiddleware({ app });
graphQLServer.installSubscriptionHandlers(httpServer);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/api', routes);

app.use((error, req, res, next) => {
  console.error(error);
  return res.status(500).json(error);
});

httpServer.listen({ port: PORT }, () => console.log(`Server ready at http://localhost:${PORT}${graphQLServer.graphqlPath}`));
