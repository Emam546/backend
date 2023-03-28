import { Router } from "express";
import FilmDB from "@src/models/film";
import Validator, { parseRules } from "validator-checker-js";
// **** Init **** //

const router = Router();
const QueryRules = parseRules({
    start: "numeric",
    end: "numeric",
});
router.get("/", async (req, res) => {
    const film = await FilmDB.find({});
    return res.json({ state: false, message: "Success", data: film });
});
router.get("/:name", async (req, res) => {
    const film = await FilmDB.findOne({ name: req.params.name }).hint({
        name: 1,
    });
    if (!film)
        return res
            .status(404)
            .json({ state: false, message: "FILM NOT FOUND" });

    return res.json({
        state: false,
        message: "Success",
        data: film,
    });
});
router.get("/morelike/:id", async (req, res) => {
    const validator = new Validator<QuerySelect>(req.query, QueryRules);
    if (await validator.fails())
        return res.status(400).json({
            statue: false,
            message: "invalid query",
            err: validator.errors,
        });
    const offset = +(validator.inputs.offset || 0);
    const limit = validator.inputs.limit
        ? parseInt(validator.inputs.limit)
        : 100;
    const moreFilms = await FilmDB.aggregate([
        { $skip: offset },
        { $sample: { size: limit } },
    ]);
    return res.json({
        state: false,
        message: "Success",
        data: moreFilms,
    });
});

// **** Export default **** //

export default router;
