import classNames from "classnames";
import { ShowerActions, useAppSelector } from "@src/store";
import { Fragment, useEffect, useRef } from "react";
import { getSourceImage } from "@src/utils";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
export function SpanHeading(
    str:
        | string
        | {
              str: string;
          }
) {
    return typeof str == "string" ? str : str.str;
}
export default function FilmPopUp() {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const showData = useAppSelector((state) => state.shower);
    const loc = useRouter();
    useEffect(() => {
        const ele = ref.current;
        if (!ele) return;
        ele.style.left = `${showData.dim.x}px`;
        ele.style.top = `${showData.dim.y}px`;
    }, [showData]);
    useEffect(() => {
        dispatch(ShowerActions.setShowState(false));
        dispatch(ShowerActions.setFilmData());
    }, [loc]);
    useEffect(() => {
        const i = 10;
        const mouseMove = (event: MouseEvent) => {
            if (!ref.current) return;
            const el = ref.current.getBoundingClientRect();
            if (
                !(event.x >= el.left - i && event.x <= el.right + i) ||
                !(event.y >= el.top - i && event.y <= el.bottom + i)
            ) {
                dispatch(ShowerActions.setShowState(false));
                setTimeout(() => {
                    dispatch(ShowerActions.setFilmData());
                }, 100);
            }
        };
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, [ref.current]);
    return (
        <div
            className={classNames(
                "absolute popup-menu text-sm bg-black -translate-x-1/2 -translate-y-1/2 w-[20vw] min-w-[15rem] overflow-hidden rounded-lg min-h-[20vw]",
                {
                    "pop-anime z-20": showData.state,
                    "pop-hide": !showData.state,
                },
            )}
            // onMouseLeave={() => {
            //     dispatch(ShowerActions.setShowState(false));
            // }}
            ref={ref}
        >
            {showData.film && (
                <Link href={`/movies/${showData.film.name}`}>
                    <div className="relative w-full aspect-video">
                        <img
                            src={getSourceImage(
                                showData.film.thumbnails.landscape
                            )}
                            alt={showData.film.name}
                            className="w-full"
                        />
                        <img
                            src={getSourceImage(showData.film.thumbnails.head)}
                            alt=""
                            className="absolute bottom-2 left-2 max-w-[80%] max-h-[30%]"
                        />
                    </div>
                    <div className="p-4">
                        <p className="font-semibold pb-2 text-white/80">
                            <span>{SpanHeading(showData.film.head[0])}</span>
                            <span className="inline-block mx-1">|</span>
                            <span>{showData.film.lang.length} Languages</span>
                            <span className="inline-block mx-1">|</span>
                            {showData.film.head
                                .slice(1, showData.film.head.length)
                                .map((str, i) => {
                                    return (
                                        <Fragment key={i}>
                                            <span>{SpanHeading(str)}</span>
                                            <span className="inline-block mx-1">
                                                |
                                            </span>
                                        </Fragment>
                                    );
                                })}

                            <span>{showData.film.age}+</span>
                        </p>
                        <p className="text-white/40">{showData.film.desc}</p>
                    </div>
                </Link>
            )}
        </div>
    );
}
