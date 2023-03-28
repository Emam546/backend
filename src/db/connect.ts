import { NodeEnvs } from "@src/declarations/enums";
import EnvVars from "@src/declarations/major/EnvVars";
import mongoose from "mongoose";
export const dbName = "Disney";
export default (url: string, autoIndex = false) => {
    return mongoose.connect(url, {
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        minPoolSize: 10, // Can now run 10 operations at a time
        autoIndex: EnvVars.nodeEnv === NodeEnvs.Dev || autoIndex,
        dbName,
    });
};
