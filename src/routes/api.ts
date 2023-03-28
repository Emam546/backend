import { Router } from "express";
import FilmRouter from "./film";
import CompanyRouter from "./company";
import EditionDB from "./editions";
import HomeDB from "./home";
import PageDB from "./pages";
import apicache from "apicache";
// **** Init **** //
const apiRouter = Router();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const cache = apicache.middleware;
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
apiRouter.use(cache(1 * 24 * 60 * 60 * 1000)); //1 day
apiRouter.use("/films", FilmRouter);
apiRouter.use("/company", CompanyRouter);
apiRouter.use("/editions", EditionDB);
apiRouter.use("/home", HomeDB);
apiRouter.use("/pages", PageDB);
// **** Export default **** //
export default apiRouter;
