import { Router } from "express";
import CompaniesDB from "@src/models/Companies";
import FilmDB from "@src/models/film";
// **** Init **** //

const router = Router();
router.get("/", async (req, res) => {
    const companies = await CompaniesDB.find();
    const films = await FilmDB.find();
    return res.json({
        state: false,
        message: "Success",
        data: {
            companies,
            films,
        },
    });
});
// **** Export default **** //

export default router;
