# Serverless-Node
Node and Express Powered Lambda back-end that integrates with Serverless Aurora via the data api

## Installation
Run `npm install`

## Run
Run `sls offline`

Note, this will likely fail is serverless is not set-up with the proper IAM permissions. This is a result of the DB integration.

You can get this set-up using the instructions found here: https://www.serverless.com/framework/docs/getting-started/

## Test
This leverages Jest as the underlying testing framework and can be run with `npm test`
