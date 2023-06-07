import { getSourceImage, serialize } from "@src/utils/index";
import Titles from "@src/components/Titles";
import BackImg from "@src/components/backImg";
import { getCompaniesData, getCompanyData } from "@serv/routes/company";
import { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
interface ServerData {
    data: Company;
}
const Page: NextPage<ServerData> = ({ data }) => {
    const company = data;
    return (
        <section className="company">
            <header className="header relative aspect-[16/5.7] overflow-hidden">
                <BackImg
                    className="relative aspect-video bg-cover"
                    src={getSourceImage(company.thumbnail.main.bg)}
                >
                    {company.thumbnail.main.image && (
                        <img
                            src={getSourceImage(company.thumbnail.main.image)}
                            className="absolute max-w-full w-[60%] h-[60%] max-h-full top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                            alt=""
                        />
                    )}
                </BackImg>
            </header>
            <main className="ml-[6rem]">
                <Titles name={company.name} />
            </main>
        </section>
    );
};
export const getStaticPaths: GetStaticPaths = async () => {
    const companies = await getCompaniesData();
    const paths = companies.map((data) => {
        return {
            params: {
                name: data.name,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps<ServerData> = async (ctx) => {
    const name = ctx?.params?.name;
    if (typeof name != "string")
        return {
            notFound: true,
        };
    try {
        const data = serialize(await getCompanyData(name));
        if (!data)
            return {
                notFound: true,
            };
        return {
            props: { data },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};

export default Page;
