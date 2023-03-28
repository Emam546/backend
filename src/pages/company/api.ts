/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";
import { domain } from "../../constants";

export async function getCompany(name: string) {
    
    const res = await axios.get(new URL(`/api/company/${name}`,domain).toString());
    return res.data.data as Company;
}
