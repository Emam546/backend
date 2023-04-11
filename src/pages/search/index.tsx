/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { SearchHandler } from "@src/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Img from "@src/components/Img";
interface SearchData {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
interface ServerData {
    data: SearchData[];
}
export function FilmPreviewORG({ Poster, Title }: SearchData) {
    return (
        <div className="cursor-pointer flex items-center justify-center bg-black-off-2 aspect-[10/14] flex-shrink-0 rounded overflow-hidden hover:scale-105 duration-100 transition-transform">
            <Img
                src={Poster}
                alt={Title}
                className="relative after:text-center after:bg-black-off-2 after:content-[attr(alt)] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:flex after:justify-center after:items-center w-full text-white/40 capitalize"
            />
        </div>
    );
}
export function FilmSkeleton() {
    return (
        <>
            {[...new Array(5)].map((_, i) => {
                return (
                    <div
                        key={i}
                        className="cursor-pointer flex items-center justify-center bg-black-off-2 aspect-[10/14] flex-shrink-0 rounded overflow-hidden"
                    ></div>
                );
            })}
        </>
    );
}
function SearchInput({
    setSearch,
}: {
    setSearch: Dispatch<SetStateAction<string>>;
}) {
    const router = useRouter();
    const inpref = useRef<HTMLInputElement>(null);
    return (
        <div className="mb-5">
            <div className="flex items-center bg-black-off-2 px-5 text-white-off-1">
                <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                <input
                    ref={inpref}
                    type="text"
                    className="flex-1 text-lg px-5 py-4 bg-black-off-2 self-stretch focus:outline-none"
                    placeholder="Movies, shows and more"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                    defaultValue={router.query.s}
                />
                {inpref.current && inpref.current.value != "" && (
                    <button
                        className="cursor-pointer mx-5"
                        onClick={() => {
                            if (!inpref.current) return;
                            inpref.current.value = "";
                            setSearch("");
                        }}
                    >
                        <i className="fa-solid fa-xmark text-2xl"></i>
                    </button>
                )}
            </div>
        </div>
    );
}
function useIsStart() {
    const [state, setState] = useState(false);
    useEffect(() => {
        setState(true);
    }, []);
    return state;
}
function ShowData({ data, search }: { data: SearchData[]; search: string }) {
    const query = useQuery({
        queryKey: ["search", search],
        initialData: data,
        queryFn: () => getData({ s: search }),
        enabled: search != "",
    });
    const isStart = useIsStart();
    useEffect(() => {
        if (isStart) query.refetch();
    }, [search]);
    if (search == "" || !query.data.length) return null;
    return (
        <div>
            <h2 className="font-semibold tracking-[-0.2px] text-white-off-1 my-3">
                TOP RESULTS
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-stretch gap-3 max-w-full flex-wrap">
                {query.isFetching && <FilmSkeleton />}
                {!query.isFetching &&
                    query.data.map((data) => {
                        return (
                            <FilmPreviewORG
                                key={data.imdbID}
                                {...data}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

async function getData(query: unknown) {
    const res = await axios.get("/api/search", { params: query });
    return (res.data.Search || []) as SearchData[];
}
const Page: NextPage<ServerData> = ({ data }) => {
    const router = useRouter();
    const [search, setSearch] = useState(router.query.s);
    useEffect(() => {
        router.push("/search", { query: search && { s: search } });
    }, [search]);
    return (
        <section
            id="search"
            className="ml-[6rem] pt-10 pr-5 min-h-screen"
        >
            <SearchInput
                setSearch={setSearch as Dispatch<SetStateAction<string>>}
            />
            <ShowData
                data={data}
                search={search as string}
            />
        </section>
    );
};

export const getServerSideProps: GetServerSideProps<ServerData> = async (
    ctx
) => {
    try {
        if (!ctx.query.s)
            return {
                props: {
                    data: [],
                },
            };
        const data = await SearchHandler(ctx.query);
        if (!data.Search)
            return {
                props: { data: [] },
            };
        return {
            props: {
                data: data.Search,
            },
        };
    } catch (err) {
        return {
            props: { data: [] },
        };
    }
};

export default Page;
