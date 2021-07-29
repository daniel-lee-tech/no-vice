import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import attemptMongooseConnection, { IMongoParams } from './mongoose/setup';


// Start the server
const port = Number(process.env.PORT || 8080);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});

/************************************************************************************
 *                              Set mongoose settings
 ***********************************************************************************/
const mongoParams : IMongoParams = {
    port: Number(process.env.MONGO_PORT || 27017),
    host: String(process.env.MONGO_HOST || 'mongodb'),
    dbName: String(process.env.MONGO_DB_NAME || 'noVice')
};

attemptMongooseConnection(mongoParams);


