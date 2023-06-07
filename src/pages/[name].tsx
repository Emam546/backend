import { getPageData, PageDataType } from "@serv/routes/pages";
import Header from "@src/components/HeadPage";
import Titles from "@src/components/Titles";
import { serialize } from "@src/utils";
import { GetServerSideProps, NextPage } from "next";

interface ServerData {
    data: PageDataType;
    name: string;
}

export const Page: NextPage<ServerData> = ({ data, name }) => {
    return (
        <section className="home">
            <Header films={data.headerfilms} />
            <main className="ml-[6rem]">
                <Titles name={name} />
            </main>
        </section>
    );
};
export const getServerSideProps: GetServerSideProps<ServerData> = async (
    ctx
) => {
    const name = ctx?.params?.name;
    if (typeof name != "string")
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
