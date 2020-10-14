import dataApiClient from 'data-api-client';

export default class DBConnection {
    static dbConnection: any;

    static getDBConnection(){
        if (!this.dbConnection){
            this.dbConnection = dataApiClient({
                // eslint-disable-next-line max-len
                secretArn: 'arn:aws:secretsmanager:us-east-1:545746761580:secret:rds-db-credentials/cluster-BPVRDUC2CLVJFXLLC4P2BDGSDY/postgres-YIUZ0F',
                resourceArn: 'arn:aws:rds:us-east-1:545746761580:cluster:test-cluster',
                database: 'test_db',
            });
        }

        return this.dbConnection;
    }

}
