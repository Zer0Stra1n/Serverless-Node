import dataApiClient from 'data-api-client';

/**
 * Sets up the connection to the db
 */
class DBConnection {
    dbConnection: any;

    /**
     * On construction set up a re-usable DB connection
     */
    constructor() {
      this.dbConnection = dataApiClient({
        // eslint-disable-next-line max-len
        secretArn: 'arn:aws:secretsmanager:us-east-1:545746761580:secret:rds-db-credentials/cluster-BPVRDUC2CLVJFXLLC4P2BDGSDY/postgres-YIUZ0F',
        resourceArn: 'arn:aws:rds:us-east-1:545746761580:cluster:test-cluster',
        database: 'test_db',
      });
    }
}

// exporting this way allows Node to use this as a singleton
export default new DBConnection();

