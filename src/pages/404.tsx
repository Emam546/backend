/* eslint-disable @typescript-eslint/require-await */
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextPageWithLayout } from "./_app";
import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/");
    }, []);
    return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        redirect: {
            destination: "/",
        },
    };
};
Page.getLayout = (page) => {
    return <>{page}</>;
};
export default Page;
