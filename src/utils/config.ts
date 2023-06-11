import { NodeEnvs } from "@serv/declarations/enums";
import dotenv from "dotenv";

export function configEnv(name: NodeEnvs) {
    const result2 = dotenv.config({
        path: `${name}.env`,
    });
    return result2;
}
