/* eslint-disable @typescript-eslint/require-await */
import { GetStaticPaths, GetStaticProps } from "next";

const Page = () => {
    return <div>Enter</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {},
        redirect:{
            destination:"/",
        }
    };
};

export default Page;
