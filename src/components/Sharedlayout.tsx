import NavBar from "./navbar";
import FilmPopUp from "./show";
import LoadingState from "./loading";
import Footer from "./Footer";
import { useLocalStorage } from "../hooks";
import { permTime } from "../constants";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import HeadMain from "./head";
import Head from "next/head";
import Script from "next/script";

export function SharedLayout({ children }: { children: ReactNode }) {
    const [lastTime] = useLocalStorage("lastTime", {
        time: Date.now(),
    });

    const router = useRouter();

    useEffect(() => {
        if (lastTime.time + permTime <= Date.now())
            router.push(`/subscribe`, {
                query: {
                    ref: router.pathname,
                },
            });
    }, [lastTime, router.pathname]);
    return (
        <>
            <HeadMain />
            <LoadingState />
            <NavBar />
            {children}
            <FilmPopUp />
            <Footer />
            <Script
                src="https://kit.fontawesome.com/7d5b5d6967.js"
                crossOrigin="anonymous"
            ></Script>
        </>
    );
}
