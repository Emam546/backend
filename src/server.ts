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
import HttpStatusCodes from "@src/declarations/major/HttpStatusCodes";
import { NodeEnvs } from "@src/declarations/enums";
import { RouteError } from "@src/declarations/classes";

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
app.use(
    expressWinstom.errorLogger({
        winstonInstance: logger,
    })
);
// Setup error handler
app.use(
    (
        err: Error,
        _: Request,
        res: Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: NextFunction
    ) => {
        logger.error(err.message, true);
        let status = HttpStatusCodes.BAD_REQUEST;
        if (err instanceof RouteError) {
            status = err.status;
        }
        return res.status(status).json({ error: err.message });
    }
);

// **** Serve front-end content **** //

// Set views directory (html)
const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);

// Set static directory (js and css).
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

// Nav to login pg by default
app.get("/", (_: Request, res: Response) => {
    res.sendFile("login.html", { root: viewsDir });
});

// Redirect to login if not logged in.
app.get("/users", (req: Request, res: Response) => {
    const jwt = req.signedCookies[EnvVars.cookieProps.key];
    if (!jwt) {
        res.redirect("/");
    } else {
        res.sendFile("users.html", { root: viewsDir });
    }
});

// **** Export default **** //

export default app;
