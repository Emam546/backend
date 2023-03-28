/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";
import { domain } from "../constants";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router";

async function getFilmData(name: string) {
    const res = await axios.get(
        new URL(`/api/films/${name}`, domain).toString()
    );
    return res.data.data as Film;
}
export const loader =
    (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs) => {
        const query = DetailFilmQuery(params.name);
        // ⬇️ return data or fetch it
        return await queryClient.fetchQuery(query);
    };
function DetailFilmQuery(name?: string) {
    return {
        queryKey: ["films", name],
        queryFn: () => getFilmData(name || ""),
        enabled: name != undefined,
    };
}
export function useGetFilmsQuery(name?: string) {
    return useQuery(DetailFilmQuery(name));
}
