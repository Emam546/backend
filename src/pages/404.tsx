/* eslint-disable @typescript-eslint/require-await */
import { NextPageWithLayout } from "./_app";
import { useEffect} from "react";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/");
    }, []);
    return <></>;
};

Page.getLayout = (page) => {
    return <>{page}</>;
};
export default Page;
