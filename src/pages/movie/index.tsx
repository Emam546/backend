/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { useParams } from "react-router";
import { domain } from "../../constants";
import { useDispatch } from "react-redux";
import { pageActions } from "../../store";
import Header from "./HeadPage";
import { Title } from "../../components/TitleSlider";
import { useGetInfinityData, useGetFilmsQuery } from "../../hooks";
export { loader } from "../../hooks/film";
async function getFilmMoreLike(_id: string, page: number, numFilms = 8) {
    const res = await axios.get(
        new URL(`/api/films/morelike/${_id}`, domain).toString(),
        {
            params: {
                offset: page * numFilms,
                limit: numFilms,
            },
        }
    );
    return {
        data: res.data.data as Film[],
        page: res.data.data.length != 0 ? page + 1 : page,
    };
}
function CustomSlider({ _id }: { _id: string }) {
    const query = useGetInfinityData(
        ["films", "morelike", _id],
        ({ pageParam = 0 }) => getFilmMoreLike(_id, pageParam)
    );
    return (
        <Title
            id="morelikethis"
            films={query.data?.pages.reduce((acc, cur) => {
                acc.push(...cur.data);
                return acc;
            }, [] as Film[])}
            onScroll={(event) => {
                const slider = event.currentTarget;
                const state =
                    slider.scrollWidth -
                        slider.scrollLeft -
                        slider.clientWidth <
                    100;
                if (state) query.fetchNextPage();
            }}
        />
    );
}
export default function Movie() {
    const { name } = useParams();

    const dispatch = useDispatch();
    const query = useGetFilmsQuery(name);
    if (query.isError) dispatch(pageActions.setError(query.error));
    if (query.isLoading || query.isError) return null;

    return (
        <section className="movie">
            <Header film={query.data} />
            <div className="ml-[6rem] my-5">
                <div className="pb-6 border-b-4 border-solid border-[#252833] mb-7 flex">
                    <h1
                        className="cursor-pointer text-xl font-bold"
                        onClick={() => {
                            document
                                .getElementById("morelikethis")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        More Like This
                    </h1>
                </div>
                <CustomSlider _id={query.data._id} />
            </div>
        </section>
    );
}
