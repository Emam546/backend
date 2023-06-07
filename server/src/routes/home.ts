import { Router } from "express";
import CompaniesDB from "@serv/models/Companies";
import FilmDB from "@serv/models/film";
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
            companies,
        },
    });
});
// **** Export default **** //

export default router;
