import app from './src/main';
import serverlessHttp from 'serverless-http';

export const api = serverlessHttp(app);
