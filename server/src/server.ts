import cookieParser from "cookie-parser";
import helmet from "helmet";
import express, { Request, Response, NextFunction } from "express";
import logger from "@serv/logger";
import "express-async-errors";
import expressWinstom from "express-winston";
import BaseRouter from "./routes/api";
import EnvVars from "@serv/declarations/major/EnvVars";
import { NodeEnvs } from "@serv/declarations/enums";
import { RouteError } from "@serv/declarations/classes";

// **** Init express **** //

const app = express();

// **** Set basic express settings **** //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(EnvVars.cookieProps.secret));
app.use(
    expressWinstom.logger({
        winstonInstance: logger,
        statusLevels: true,
    })
);
// Security
if (EnvVars.nodeEnv === NodeEnvs.Production) {
    app.use(helmet());
}

// **** Add API routes **** //

// Add APIs
app.use("/api", BaseRouter);
// Setup error handler
app.use(
    (
        err: Error,
        _: Request,
        res: Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: NextFunction
    ) => {
        logger.error(err.message);
        let status = 504;
        if (err instanceof RouteError) {
            status = err.status;
        }
        return res.status(status).json({ error: err.message });
    }
);
// **** Export default **** //
export default app;
