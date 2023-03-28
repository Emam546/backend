import { NodeEnvs } from "@src/declarations/enums";
import EnvVars from "@src/declarations/major/EnvVars";
import { transports, format, createLogger, Logger } from "winston";
import "winston-mongodb";
let logger: Logger = createLogger({
    transports: [
        new transports.Console({}),
    ],
    format:format.combine(
        format.colorize(),
        format.simple(),
        format.errors({stack:true})
    )
    
});
if (EnvVars.nodeEnv == NodeEnvs.Production) {
    logger = createLogger({
        transports: [
            new transports.MongoDB({
                level: "error",
                db: EnvVars.MONGODB_URL,
                collection: "logs",
                // format: format.metadata(),
            }),
        ],
        format: format.combine(
            format.json(),
            format.timestamp(),
            format.errors({ stack: true }),
            
        ),
    });
}
export default logger;
