import { domain } from "@src/constants";
import axios from "axios";
export interface PageDataType {
    headerfilms: Film[];
}
export async function getPageData(name: string) {
    const res = await axios.get(`${domain}/api/pages/${name}`);
    return res.data.data as PageDataType;
}
