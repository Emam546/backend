import "./pre-start"; // Must be the first import

import EnvVars from "@src/declarations/major/EnvVars";
import server from "./server";
import logger from "@src/logger";
import connect from "./db/connect";
// **** Start server **** //

const msg = "Express server started on port: " + EnvVars.port.toString();
connect(EnvVars.MONGODB_URL).then(() => {
    logger.info("Connecting to database");
    server.listen(EnvVars.port, () => logger.info(msg));
});
