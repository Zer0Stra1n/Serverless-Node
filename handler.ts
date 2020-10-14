import app from './src/main';
import serverlessHttp from 'serverless-http';
import dataApiClient from 'data-api-client';

const db = dataApiClient({
  // eslint-disable-next-line max-len
  secretArn: 'arn:aws:secretsmanager:us-east-1:545746761580:secret:rds-db-credentials/cluster-BPVRDUC2CLVJFXLLC4P2BDGSDY/postgres-YIUZ0F',
  resourceArn: 'arn:aws:rds:us-east-1:545746761580:cluster:test-cluster',
  database: 'test_db',
});

/**
 * test
 */
async function test() {
  const result = await db.query('Select * from movies');
  console.log(result);
}

test();


export const api = serverlessHttp(app);
