// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SearchHandler } from "@src/api";
import type { NextApiRequest, NextApiResponse } from "next";
// https://www.omdbapi.com/?apikey=[apuikey]&t=fight+club

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != "GET") return res.status(404);
    try {
        const data = await SearchHandler(req.query);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
