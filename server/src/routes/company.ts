import { Router } from "express";
import CompaniesDB from "@serv/models/Companies";
// **** Init **** //

const router = Router();
export function getCompaniesData() {
    return CompaniesDB.find();
}
router.get("/", async (req, res) => {
    const companies = await getCompaniesData();
    return res.json({ state: false, message: "Success", data: companies });
});
export function getCompanyData(name: string) {
    return CompaniesDB.findOne({
        name: name.split("-").join(" "),
    });
}
router.get("/:name", async (req, res) => {
    const company = await getCompanyData(req.params.name.split("-").join(" "));
    if (!company)
        return res
            .status(404)
            .json({ state: false, message: "Company NOT FOUND" });
    return res.json({ state: false, message: "Success", data: company });
});

// **** Export default **** //

export default router;
