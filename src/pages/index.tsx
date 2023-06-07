import Header from "@src/components/HeadPage";
import Titles from "@src/components/Titles";
import Companies from "@src/components/companies";
import { GetServerSideProps, NextPage } from "next";
import { getCompaniesData } from "@serv/routes/company";
import { PageDataType, getPageData } from "@serv/routes/pages";
import { serialize } from "@src/utils";
interface ServerData extends PageDataType {
    companies: Company[];
}

const Home: NextPage<ServerData> = ({ headerfilms, companies }) => {
    return (
        <section className="home">
            <Header films={headerfilms} />
            <main className="ml-[6rem] max-w-full">
                <Companies data={companies} />
                <Titles name={"home"} />
            </main>
        </section>
    );
};
export const getServerSideProps: GetServerSideProps<ServerData> = async () => {
    const companies = serialize(await getCompaniesData().lean());
    const data = serialize(await getPageData("home"));
    if (!data || !companies)
        return {
            notFound: true,
        };

    return {
        props: {
            ...data,
            companies: companies,
        },
    };
};
export default Home;
