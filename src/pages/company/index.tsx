import { QueryClient, useQuery } from "@tanstack/react-query";
import { LoaderFunctionArgs, useParams } from "react-router";
import { getCompany } from "./api";
import { useDispatch } from "react-redux";
import { pageActions } from "../../store";
import { getSourceUrl } from "../../utils/index";
import Titles from "../../components/Titles";
import BackImg from "../../components/backImg";
export const loader =
    (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs) => {
        const query = DetailedQuery(params.name);
        // ⬇️ return data or fetch it
        return await queryClient.fetchQuery(query);
    };
function DetailedQuery(name?: string) {
    return {
        queryKey: ["company", name],
        queryFn: () => getCompany(name || ""),
    };
}
export default function Company() {
    const { name } = useParams();
    const dispatch = useDispatch();
    const query = useQuery(DetailedQuery(name));

    if (query.isError) {
        dispatch(pageActions.setError(query.error));
        return null;
    }
    if (query.isLoading || query.isError) return null;

    const company = query.data;
    return (
        <section className="company">
            <header className="header relative aspect-[16/5.7] overflow-hidden">
                <BackImg
                    className="relative aspect-video bg-cover"
                    src={getSourceUrl(company.thumbnail.main.bg)}
                >
                    {company.thumbnail.main.image && (
                        <img
                            src={getSourceUrl(company.thumbnail.main.image)}
                            className="absolute max-w-full w-[60%] h-[60%] max-h-full top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    )}
                </BackImg>
            </header>
            <main className="ml-[6rem]">
                <Titles name={query.data.name} />
            </main>
        </section>
    );
}
