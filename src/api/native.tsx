/* eslint-disable node/no-process-env */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { domain } from "@src/constants";
import axios from "axios";
export interface PageDataType {
    headerfilms: Film[];
}
export async function getPageData(name: string) {
    const res = await axios.get(`${domain}/api/pages/${name}`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return res.data.data as PageDataType;
}
