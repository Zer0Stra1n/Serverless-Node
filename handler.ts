import app from './src/main';
import serverlessHttp from 'serverless-http';
import connection from './src/connection';

connection.getDBConnection();

export const api = serverlessHttp(app);
