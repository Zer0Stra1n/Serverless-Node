'use strict';
const awsServerless = require('aws-serverless-express');
const app = require('./src/main');

const server = awsServerless.createServer(app);

exports.api = (event, context) => {
  return awsServerless.proxy(server, event, context);
};