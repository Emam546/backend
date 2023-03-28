import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
export { useGetFilmsQuery } from "./film";
export function useForceUpdate() {
    const [, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update state to force render
}
export function useGetInfinityData<T extends { page: number }>(
    queryKey: any[] | undefined,
    func: QueryFunction<T, any[]>
) {
    const query = useInfiniteQuery({
        queryKey: queryKey,
        getNextPageParam: (predate: T, allData: T[]) => {
            if (!predate || allData.at(-2)?.page != predate.page)
                return predate.page;
        },
        queryFn: func,
    });
    return query;
}
export function useLocalStorage<T>(
    name: string,
    defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const res = localStorage.getItem(name) || JSON.stringify(defaultValue);
    const [val, setVal] = useState<T>(JSON.parse(res) as unknown as T);
    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(val));
    }, [name, val]);
    return [val, setVal];
}
