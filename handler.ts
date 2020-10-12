'use strict';
import awsServerless from 'aws-serverless-express';
import app from './src/main';

const server = awsServerless.createServer(app);

export const api = (event, context) => {
  return awsServerless.proxy(server, event, context);
};