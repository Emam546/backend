import { QueryClient, useQuery } from "@tanstack/react-query";
import Header from "../../components/HeadPage";
import Titles from "../../components/Titles";
import Companies from "./companies";
import { pageActions, useAppDispatch } from "../../store";
import { domain } from "../../constants";
import axios from "axios";
export interface DataType {
    companies: Company[];
    headerfilms: Film[];
}
async function getData(name: string) {
    const res = await axios.get(new URL(`/api/${name}`, domain).toString());
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return res.data.data as DataType;
}
const DetailQuery = () => ({
    queryKey: ["home"],
    queryFn: () => getData("home"),
});
export const loader = (queryClient: QueryClient) => async () => {
    const query = DetailQuery();
    // ⬇️ return data or fetch it
    return await queryClient.fetchQuery(query);
};
export default function Home() {
    const dispatch = useAppDispatch();
    const queryReq = useQuery(DetailQuery());
    if (queryReq.isError) dispatch(pageActions.setError(queryReq.error));
    if (queryReq.isLoading || queryReq.isError) return null;
    return (
        <section className="home">
            <Header films={queryReq.data.headerfilms} />
            <main className="ml-[6rem] max-w-full">
                <Companies data={queryReq.data.companies} />
                <Titles name={"home"} />
            </main>
        </section>
    );
}
