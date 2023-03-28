import { QueryClient, useQuery } from "@tanstack/react-query";
import Header from "../../components/HeadPage";
import Titles from "../../components/Titles";
import { pageActions, useAppDispatch } from "../../store";
import { domain } from "../../constants";
import axios from "axios";
import { LoaderFunctionArgs, useParams } from "react-router";
export interface DataType {
    headerfilms: Film[];
}
async function getData(name: string) {
    const res = await axios.get(new URL(`/api/pages/${name}`, domain).toString());
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return res.data.data as DataType;
}
export const loader =
    (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs) => {
        const query = DetailFilmQuery(params.name);
        // ⬇️ return data or fetch it
        return await queryClient.fetchQuery(query);
    };
function DetailFilmQuery(name?: string) {
    return {
        queryKey: ["films", name],
        queryFn: () => getData(name || ""),
        enabled: name != undefined,
    };
}

export function Page({ name }: { name: string }) {
    const dispatch = useAppDispatch();
    const queryReq = useQuery(DetailFilmQuery(name));

    if (queryReq.isError) dispatch(pageActions.setError(queryReq.error));
    if (queryReq.isLoading || queryReq.isError) return null;
    return (
        <section className="home">
            <Header films={queryReq.data.headerfilms} />
            <main className="ml-[6rem]">
                <Titles name={name} />
            </main>
        </section>
    );
}
export default function PageRouter() {
    const { name } = useParams();
    return <Page name={name || ""} />;
}
