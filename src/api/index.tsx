/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { domain } from "@src/constants";
import axios from "axios";
import { NextApiRequest } from "next";
import cache from "memory-cache";

export async function getFilmData(name: string) {
    const res = await axios.get(
        new URL(`/api/films/${name}`, domain).toString()
    );
    return res.data.data as Film;
}
export interface PageDataType {
    headerfilms: Film[];
}
export async function getPageData(name: string) {
    const res = await axios.get(
        new URL(`/api/pages/${name}`, domain).toString()
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return res.data.data as PageDataType;
}

export async function getCompanyData(name: string) {
    const res = await axios.get(
        new URL(`/api/company/${name}`, domain).toString()
    );
    return res.data.data as Company;
}
export async function getCompaniesData() {
    const res = await axios.get(new URL(`/api/company`, domain).toString());
    return res.data.data as Company[];
}
export async function SearchHandler(query: any) {
    const saveData = cache.get("search" + JSON.stringify(query));
    if (saveData) return JSON.parse(saveData);
    const rest = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.API_KEY}`,
        {
            params: query,
        }
    );
    if (rest.status == 200)
        cache.put("search" + JSON.stringify(query), JSON.stringify(rest.data));
    return rest.data;
}
