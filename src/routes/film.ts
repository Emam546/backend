import { Router } from "express";
import FilmDB from "@src/models/film";
// **** Init **** //

const router = Router();

router.get("/:name", async (req, res) => {
    const film = await FilmDB.findOne({ name: req.params.name }).hint({
        name: 1,
    });
    if (!film)
        return res
            .status(404)
            .json({ state: false, message: "FILM NOT FOUND" });

    return res.json({ state: false, message: "Success", data: film });
});
router.get("/company/:company", async (req, res) => {
    const film = await FilmDB.find({ name: req.params.company }).hint({
        company: 1,
    });
    return res.json({ state: false, message: "Success", data: film });
});
// **** Export default **** //

export default router;
