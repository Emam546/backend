/* eslint-disable node/no-process-env */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { domain } from "@src/constants";
import axios from "axios";
import cache from "memory-cache";
import { PageDataType } from "@serv/routes/pages";
export async function getFilmData(name: string) {
    const res = await axios.get(`${domain}/api/films/${name}`);
    return res.data.data as Film;
}

export async function getPageData(name: string) {
    const res = await axios.get(`${domain}/api/pages/${name}`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return res.data.data as PageDataType;
}

export async function getCompanyData(name: string) {
    const res = await axios.get(`${domain}/api/company/${name}`);
    return res.data.data as Company;
}
export async function getCompaniesData() {
    const res = await axios.get(`${domain}/api/company`);
    return res.data.data as Company[];
}
export async function SearchHandler(query: unknown) {
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
