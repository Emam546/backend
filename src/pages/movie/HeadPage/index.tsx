import { Fragment } from "react";
import { PayUrl, getSourceImage } from "../../../utils";
import classNames from "classnames";
import { Link } from "react-router-dom";
import BtnSaveToWatchLater from "../../../components/savTowatchLater";

function SpanHeading({
    str,
}: {
    str:
        | string
        | {
              str: string;
          };
}) {
    return (
        <span
            className={classNames({
                "bg-white/20 inline-block px-2 leading-7":
                    typeof str != "string",
            })}
        >
            {typeof str == "string" ? str : str.str}
        </span>
    );
}
export default function Header({ film }: { film: Film }) {
    const checkUrl = PayUrl(film.name);
    return (
        <header className="header relative ml-[6rem]">
            <div>
                <img
                    src={getSourceImage(film.thumbnails.landscape)}
                    className="w-full aspect-video select-none"
                    alt="Failed"
                />
                <div className="w-full h-64 absolute bottom-0 left-0 bg-gradient-to-t from-black to-trans"></div>
                <div className="w-1/3 h-full absolute top-0 left-0 bg-gradient-to-r from-black to-trans"></div>
            </div>
            <div className="flex justify-between absolute left-0 bottom-0 w-full pb-5">
                <div className="w-[25rem] max-w-full mb-10">
                    <div>
                        <div>
                            <img
                                src={getSourceImage(film.thumbnails.head)}
                                alt=""
                                className="max-w-full max-h-32"
                            />
                        </div>
                        <div className="text-white/[0.84] font-semibold">
                            <p className="pt-5">
                                <SpanHeading str={film.head[0]} />
                                <span className="inline-block mx-2">•</span>
                                <span>{film.lang.length} Languages</span>
                                <span className="inline-block mx-2">•</span>

                                {film.head
                                    .slice(1, film.head.length)
                                    .map((str, i) => {
                                        return (
                                            <Fragment key={i}>
                                                <SpanHeading str={str} />
                                                <span className="inline-block mx-2">
                                                    •
                                                </span>
                                            </Fragment>
                                        );
                                    })}

                                <span className="bg-white/20 inline-block px-2 leading-7">
                                    +{film.age}
                                </span>
                            </p>
                            <p className="hidden 2xl:block pt-5">{film.desc}</p>
                            <p className="pt-5 hidden lg:inline-block">
                                {film.bottom.map((res, i) => {
                                    return (
                                        <Fragment key={i}>
                                            {res}
                                            {i != film.bottom.length - 1 && (
                                                <span
                                                    className="inline-block mx-2"
                                                    key={i}
                                                >
                                                    |
                                                </span>
                                            )}
                                        </Fragment>
                                    );
                                })}
                            </p>
                        </div>

                        <div className="pt-5 flex flex-wrap gap-4">
                            <Link
                                to={checkUrl}
                                className="bg-white/90 text-black rounded-lg transition-all hover:scale-[1.05] duration-500 py-3 px-4  font-semibold flex justify-center items-center flex-1"
                            >
                                <i className="fa-solid fa-play pr-2"></i>
                                Subscribe to Watch
                            </Link>
                            <BtnSaveToWatchLater id={film._id} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
