import "@src/styles/globals.scss";
import "@src/styles/App.scss";
import "@src/styles/loading.scss";
import "@src/styles/navbar.scss";
import "@src/styles/show.scss";
import "@src/styles/subscribe.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { store } from "@src/store";
import queryClient from "@src/queryClient";
import { SharedLayout } from "@src/components/Sharedlayout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Script from "next/script";
export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
    P,
    IP
> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
    if (Component.getLayout) {
        return (
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {Component.getLayout(<Component {...pageProps} />)}
                    
                </Provider>
            </QueryClientProvider>
        );
    }
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                
                <SharedLayout>
                    <Component {...pageProps} />
                </SharedLayout>
                
            </Provider>
        </QueryClientProvider>
    );
}
