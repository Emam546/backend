import { Router } from "express";
import FilmRouter from "./film";
import CompanyRouter from "./company";
import EditionDB from "./editions";
import HomeDB from "./home";
import PageDB from "./pages";
import apicache from "apicache";
import cors from "cors";
// **** Init **** //
const router = Router();
router.use(cors({ origin: "*" }));
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const cache = apicache.middleware;
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
router.use(cache(1 * 24 * 60 * 60 * 1000)); //1 day
router.use("/films", FilmRouter);
router.use("/company", CompanyRouter);
router.use("/editions", EditionDB);
router.use("/home", HomeDB);
router.use("/pages", PageDB);
// **** Export default **** //
export default router;
