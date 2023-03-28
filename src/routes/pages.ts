import { Router } from "express";
import FilmDB from "@src/models/film";

// **** Init **** //
const router = Router();
const pages = ["home", "originals", "series", "movies"];
router.get("/:name", async (req, res) => {
    const editions = pages.some((val) => val == req.params.name);
    if (!editions)
        return res.status(404).json({
            state: false,
            message: "page is not exist",
        });
    const headerfilms = await FilmDB.aggregate([{ $sample: { size: 7 } }]);
    return res.json({
        state: false,
        message: "Success",
        data: {
            headerfilms,
        },
    });
});

// **** Export default **** //

export default router;
