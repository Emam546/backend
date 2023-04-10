/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useRef } from "react";
import { Title, TitleSkeleton } from "../TitleSlider";
import { getFilms, getTitles } from "./api";
import { useGetInfinityData } from "@src/hooks";

function PageTitle({ title, _id }: { title: string; _id: string }) {
    const query = useGetInfinityData(
        ["editions", _id, "infinity"],
        ({ pageParam = 0 }) => getFilms(_id, pageParam)
    );
    const films = query.data?.pages.reduce((predata, data) => {
        predata.push(...data.data.films);
        return predata;
    }, [] as Film[]);
    return (
        <Title
            title={title}
            onScroll={(event) => {
                const slider = event.currentTarget;
                const state =
                    slider.scrollWidth -
                        slider.scrollLeft -
                        slider.clientWidth <
                    100;
                if (state) query.fetchNextPage();
            }}
            films={films}
        />
    );
}

export default function Titles({ name }: { name: string }) {
    const query = useGetInfinityData(["titles", name], ({ pageParam = 0 }) =>
        getTitles(name, pageParam)
    );
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!ref.current) return;
        function scroll() {
            if (!ref.current) return;
            const scrollState =
                window.innerHeight + window.scrollY >=
                ref.current.offsetTop + ref.current.offsetHeight;
            if (scrollState) query.fetchNextPage();
        }
        window.addEventListener("scroll", scroll);
        return () => window.removeEventListener("scroll", scroll);
    }, [ref]);
    return (
        <div ref={ref}>
            {query.data?.pages.map((titles, oi) => {
                return titles.data.map(({ name, _id }, i) => {
                    return (
                        <PageTitle
                            key={`${oi}${i}`}
                            title={name}
                            _id={_id}
                        />
                    );
                });
            })}
            {query.isFetching && <TitleSkeleton />}
        </div>
    );
}
