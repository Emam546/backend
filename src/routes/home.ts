import { Router } from "express";
import CompaniesDB from "@src/models/Companies";
import FilmDB from "@src/models/film";
// **** Init **** //

const router = Router();
router.get("/", async (req, res) => {
    const companies = await CompaniesDB.find({});
    const headerfilms = await FilmDB.aggregate([{ $sample: { size: 7 } }]);
    return res.json({
        state: false,
        message: "Success",
        data: {
            headerfilms,
            companies
        },
    });
});
// **** Export default **** //

export default router;
