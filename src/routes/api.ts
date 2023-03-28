import { Router } from "express";
import FilmRouter from "./film";
import CompanyRouter from "./company";
import EditionDB from "./editions";
import HomeDB from "./home";
import PageDB from "./pages";
// **** Init **** //
const apiRouter = Router();
apiRouter.use("/films", FilmRouter);
apiRouter.use("/company", CompanyRouter);
apiRouter.use("/editions", EditionDB);
apiRouter.use("/home", HomeDB);
apiRouter.use("/pages", PageDB);
// **** Export default **** //
export default apiRouter;
