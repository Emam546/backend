import Header from "@src/components/HeadPage";
import Titles from "@src/components/Titles";
import Companies from "@src/components/companies";
import { GetServerSideProps, NextPage } from "next";
import { PageDataType, getCompaniesData, getPageData } from "@src/api";

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
    const companies = await getCompaniesData();
    const data = await getPageData("home");
    return {
        props: {
            ...data,
            companies,
        },
    };
};
export default Home;
