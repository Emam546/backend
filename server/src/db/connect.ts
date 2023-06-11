import { NodeEnvs } from "@serv/declarations/enums";
import EnvVars from "@serv/declarations/major/EnvVars";
import mongoose from "mongoose";
export const dbName = "Disney";
const connect = async (url: string, autoIndex = false) => {
    if (mongoose.connection.readyState == 1) return mongoose.connection.db;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const m = await mongoose.connect(url, {
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        minPoolSize: 10, // Can now run 10 operations at a time
        autoIndex: EnvVars.nodeEnv === NodeEnvs.Dev || autoIndex,
        dbName,
    });
    return m.connection.db;
};
export default connect;
