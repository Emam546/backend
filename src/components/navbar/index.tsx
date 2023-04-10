import { ReactNode, useState } from "react";
import classNames from "classnames";
import { getMainSourceUrl } from "@src/utils";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import Img from "../Img";
const paths = [
    {
        path: "/",
    },
    {
        path: "/movies",
    },
    {
        path: "/originals",
    },
    {
        path: "/series",
    },
    {
        path: "/search",
    },
];

function NavLink({
    activeClassName,
    ...p
}: LinkProps & {
    activeClassName?: string;
    children?: ReactNode;
    className?: string;
}) {
    const router = useRouter();
    if (
        (router.asPath == p.as || router.asPath == p.href) &&
        activeClassName &&
        p.className
    ) {
        p.className += " " + activeClassName;
    }
    return <Link {...p}>{p.children}</Link>;
}

export default function NavBar() {
    const [inState, setHover] = useState(false);
    function hover(state: boolean) {
        return () => {
            setHover(state);
        };
    }
    const router = useRouter();
    const resPath = paths.some(
        (path) => path.path == router.asPath || path.path == router.pathname
    );
    return (
        <>
            <aside
                className={classNames(
                    "nav fixed left-0 w-fit hrefp-0 z-10 transition-all",
                    {
                        hover: inState,
                    }
                )}
            >
                <div
                    className="overlay"
                    onMouseEnter={hover(true)}
                    onMouseLeave={hover(false)}
                ></div>
                <div
                    className="overlay-2"
                    onMouseEnter={hover(true)}
                    onMouseLeave={hover(false)}
                ></div>
                <div className="absolute hrefp-0 left-0 p-4 select-none">
                    <Img
                        src={getMainSourceUrl(
                            "images/logo-d-plus-horizontal.svg"
                        )}
                        alt="logo"
                        className="w-full lg:w-auhref"
                    />
                </div>
                <div className="h-screen flex flex-col justify-center items-center">
                    <nav
                        onMouseEnter={hover(true)}
                        onMouseLeave={hover(false)}
                        className={classNames(
                            "px-3 py-11 gap-1 flex flex-col justify-center items-center transition duration-300",
                            {
                                "opacity-20": !resPath && !inState,
                                "opacity-100": inState,
                            }
                        )}
                    >
                        <NavLink
                            onClick={() => hover(false)}
                            activeClassName="active"
                            href="/search"
                        >
                            <div className="px-4 py-2 my-2 hover:scale-125 transition-all duration-200 z-10 relative">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span className="text-link-span font-semibold mx-4">
                                    Search
                                </span>
                            </div>
                        </NavLink>
                        <NavLink
                            onClick={() => hover(false)}
                            activeClassName="active"
                            href="/"
                        >
                            <div className="px-4 py-2 my-2  hover:scale-125 transition-all duration-200 z-10 relative">
                                <i className="fa-solid fa-house"></i>
                                <span className="text-link-span font-semibold mx-4">
                                    Home
                                </span>
                            </div>
                        </NavLink>
                        <NavLink
                            onClick={() => hover(false)}
                            activeClassName="active"
                            href="/series"
                        >
                            <div className="px-4 py-2 my-2 hover:scale-125 transition-all duration-200 z-10 relative">
                                <i className="fa-solid fa-tv"></i>
                                <span className="text-link-span font-semibold mx-4">
                                    Series
                                </span>
                            </div>
                        </NavLink>
                        <NavLink
                            onClick={() => hover(false)}
                            activeClassName="active"
                            href="/movies"
                        >
                            <div className="px-4 py-2 my-2 hover:scale-125 transition-all duration-200 z-10 relative">
                                <i className="fa-solid fa-clapperboard"></i>
                                <span className="text-link-span font-semibold mx-4">
                                    Movies
                                </span>
                            </div>
                        </NavLink>
                        <NavLink
                            onClick={() => hover(false)}
                            activeClassName="active"
                            href="/originals"
                        >
                            <div className="px-4 py-2 my-2 hover:scale-125 transition-all duration-200 z-10 relative">
                                <i className="fa-solid fa-boxes-stacked"></i>
                                <span className="text-link-span font-semibold mx-4">
                                    Originals
                                </span>
                            </div>
                        </NavLink>
                    </nav>
                </div>
            </aside>
        </>
    );
}
