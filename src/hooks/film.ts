import { getFilmData } from "@src/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

function DetailFilmQuery(
    name: string,
    options?: UseQueryOptions<Film, unknown, Film, string[]>
) {
    return {
        queryKey: ["films", name],
        queryFn: () => getFilmData(name || ""),
        enabled: name != undefined,
        ...options,
    };
}
export function useGetFilmsQuery(...a: Parameters<typeof DetailFilmQuery>) {
    return useQuery(DetailFilmQuery(...a));
}
