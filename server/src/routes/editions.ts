import { Router } from "express";
import EditionDB from "@serv/models/editions";
import Validator, { parseRules } from "validator-checker-js";
import EdTitleDB from "@serv/models/eddTitles";

// **** Init **** //

const router = Router();
const QueryRules = parseRules({
    start: "numeric",
    end: "numeric",
});

router.get("/eddgroup/:name", async (req, res) => {
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
    const editions = await EdTitleDB.findOne(
        { name: req.params.name },
        {
            editions: { $slice: [offset, limit] },
        }
    ).populate("editions");
    if (!editions)
        return res
            .status(404)
            .json({ state: false, message: "document not found" });
    return res.json({ state: false, message: "Success", data: editions });
});
router.get("/:id", async (req, res) => {
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
    const editions = await EditionDB.findById(req.params.id, {
        films: { $slice: [offset, limit] },
    }).populate("films");

    if (!editions)
        return res
            .status(404)
            .json({ state: false, message: "document not found" });
    return res.json({ state: false, message: "Success", data: editions });
});
// **** Export default **** //

export default router;
