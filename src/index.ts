import './pre-start'; // Must be the first import

import EnvVars from '@src/declarations/major/EnvVars';
import server from './server';
import logger from '@src/logger';


// **** Start server **** //

const msg = ('Express server started on port: ' + EnvVars.port.toString());
server.listen(EnvVars.port, () => logger.info(msg));
