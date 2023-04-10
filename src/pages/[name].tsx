import { PageDataType, getPageData } from "@src/api";
import Header from "@src/components/HeadPage";
import Titles from "@src/components/Titles";
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
        const data = await getPageData(name);
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
