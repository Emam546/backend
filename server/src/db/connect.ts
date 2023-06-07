import { NodeEnvs } from "@serv/declarations/enums";
import EnvVars from "@serv/declarations/major/EnvVars";
import mongoose from "mongoose";
export const dbName = "Disney";
const connect = (url: string, autoIndex = false) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return mongoose.connect(url, {
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        minPoolSize: 10, // Can now run 10 operations at a time
        autoIndex: EnvVars.nodeEnv === NodeEnvs.Dev || autoIndex,
        dbName,
    });
};
export default connect;
