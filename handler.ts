import app from './src/main';
import serverlessHttp from 'serverless-http';
import connection from './connection';

connection.getDBConnection();

export const api = serverlessHttp(app);
