/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Router } from "express";
import FilmDB from "@serv/models/film";

// **** Init **** //
const router = Router();
export type PageType = "home" | "originals" | "series" | "movies";
export const pages: PageType[] = ["home", "originals", "series", "movies"];
export function isPageTitle(name: unknown): name is PageType {
    return pages.some((v) => v == name);
}

export async function getPageData(name: string) {
    if (!isPageTitle(name)) return null;
    const films = await FilmDB.aggregate([{ $sample: { size: 7 } }]);
    return {
        headerfilms: films,
    };
}

export interface PageDataType {
    headerfilms: Film[];
}
router.get("/:name", async (req, res) => {
    const data = await getPageData(req.params.name);
    if (!data)
        return res.status(404).json({
            state: false,
            message: "page is not exist",
        });
    return res.json({
        state: false,
        message: "Success",
        data,
    });
});

// **** Export default **** //

export default router;
