import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import express, { Request, Response, NextFunction } from "express";
import logger from "@src/logger";
import "express-async-errors";
import expressWinstom from "express-winston";
import BaseRouter from "./routes/api";
import EnvVars from "@src/declarations/major/EnvVars";
import { NodeEnvs } from "@src/declarations/enums";
import { RouteError } from "@src/declarations/classes";
import cors from "cors";
// **** Init express **** //

const app = express();

// **** Set basic express settings **** //
if (EnvVars.nodeEnv == NodeEnvs.Dev)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(EnvVars.cookieProps.secret));
app.use(
    expressWinstom.logger({
        winstonInstance: logger,
        statusLevels: true,
    })
);
// Show routes called in console during development
if (EnvVars.nodeEnv === NodeEnvs.Dev) {
    app.use(morgan("dev"));
}

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
        logger.error(err.message,);
        let status = 504;
        if (err instanceof RouteError) {
            status = err.status;
        }
        return res.status(status).json({ error: err.message });
    }
);

// **** Serve front-end content **** //

// Set static directory (js and css).
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));
app.use("/src", express.static("./images"));
app.use((req, res) => {
    res.status(404).json({ status: false, msg: "page is not exist" });
});
// **** Export default **** //

export default app;
