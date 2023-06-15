import {
    getPageData,
    isPageTitle,
    PageDataType,
    PageType,
} from "@serv/routes/pages";
import Header from "@src/components/HeadPage";
import Titles from "@src/components/Titles";
import { serialize } from "@src/utils";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface ServerData {
    data: PageDataType;
    name: PageType;
}

const PageTitles: Record<PageType, string> = {
    home: "",
    originals: "Exclusive Disney+ Originals",
    series: "Watch Hit TV Series on Disney+",
    movies: "Stream Blockbuster Movies on Disney+",
};
export const Page: NextPage<ServerData> = ({ data, name }) => {
    return (
        <>
            <Head>
                <title>{PageTitles[name]}</title>
            </Head>
            <section className="home">
                <Header films={data.headerfilms} />
                <main className="ml-[6rem]">
                    <Titles name={name} />
                </main>
            </section>
        </>
    );
};
export const getServerSideProps: GetServerSideProps<ServerData> = async (
    ctx
) => {
    const name = ctx?.params?.name;
    if (!isPageTitle(name))
        return {
            notFound: true,
        };
    try {
        const data = serialize(await getPageData(name));
        if (!data)
            return {
                notFound: true,
            };

        return {
            props: {
                data,
                name,
            },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};
export default Page;
