import { useEffect, useState, Fragment } from "react";
import Slider from "./customSlider";
import { PayUrl, getSourceImage } from "../../utils";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Img from "../Img";
import BackImg from "../backImg";
import BtnSaveToWatchLater from "../savTowatchLater";

function FilmsSlider({
    films,
    curi,
    setI,
}: {
    curi: number;
    films: Film[];
    setI: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <div className="self-end sm:mr-16">
            <Slider className="w-[19rem] flex pr-20 gap-2 overflow-hidden py-5 pl-5 max-w-full">
                {films.map((film, i) => {
                    return (
                        <div
                            key={film._id}
                            onClick={() => setI(i)}
                            className={classNames(
                                "block cursor-pointer flex-shrink-0 aspect-video rounded-lg  opacity-70 h-[3.2rem] hover:opacity-100 hover:scale-125 hover:z-[1] overflow-hidden bg-black-off-2",
                                {
                                    "border border-white border-solid":
                                        curi == i,
                                }
                            )}
                        >
                            <Img
                                src={getSourceImage(
                                    film.thumbnails.headPortal ??
                                        film.thumbnails.landscape
                                )}
                                block={true}
                                className="h-full"
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
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

export default function Header({ films }: { films: Film[] }) {
    const [i, setI] = useState(0);
    useEffect(() => {
        const interval = setTimeout(() => {
            if (films.length) setI((prei) => (prei + 1) % films.length);
        }, 20000);
        return () => {
            clearTimeout(interval);
        };
    }, [i, films]);
    if (!films.length) return null;
    const film = films[i];
    const checkUrl = PayUrl(film.name);

    return (
        <header className="header relative ml-[6rem]">
            <Link to={`/movies/${film.name}`}>
                <BackImg
                    className="aspect-video bg-cover relative"
                    src={getSourceImage(film.thumbnails.landscape)}
                >
                    <div className="w-full h-52 absolute bottom-0 left-0 bg-gradient-to-t from-black to-trans"></div>
                    <div className="w-1/3 h-full absolute top-0 left-0 bg-gradient-to-r from-black to-trans"></div>
                </BackImg>
            </Link>
            <div className="flex justify-between absolute left-0 bottom-0 w-full pb-5 flex-wrap">
                <div className="w-[25rem] max-w-full">
                    <div>
                        <Link
                            to={`/movies/${film.name}`}
                            className="block relative"
                        >
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
                                <p className="hidden 2xl:block pt-5">
                                    {film.desc}
                                </p>
                                <p className="pt-5 hidden lg:inline-block">
                                    {film.bottom.map((res, i) => {
                                        return (
                                            <Fragment key={i}>
                                                {res}
                                                {i !=
                                                    film.bottom.length - 1 && (
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
                        </Link>
                        <div className="pt-5 flex flex-wrap gap-4 max-w-full">
                            <Link
                                to={checkUrl}
                                className="bg-[#212226] rounded-lg transition-all hover:scale-[1.02] hover:bg-white/30 duration-500 py-3 px-4 text-white font-semibold flex justify-center items-center flex-1"
                            >
                                <i className="fa-solid fa-play pr-2"></i>
                                Watch Now
                            </Link>
                            <BtnSaveToWatchLater id={film._id} />
                        </div>
                    </div>
                </div>

                <FilmsSlider
                    curi={i}
                    films={films}
                    setI={setI}
                />
            </div>
        </header>
    );
}
