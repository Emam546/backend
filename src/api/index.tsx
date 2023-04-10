/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { domain } from "@src/constants";
import axios from "axios";

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
    const res = await axios.get(new URL(`/api/company/${name}`,domain).toString());
    return res.data.data as Company;
}
export async function getCompaniesData() {
    const res = await axios.get(new URL(`/api/company`,domain).toString());
    return res.data.data as Company[];
}
