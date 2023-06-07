import axios from "axios";
import { domain } from "@src/constants";

type Titles = { data: TitleType[]; page: number };
export async function getTitles(name: string, page: number, numTitles = 3) {
    const res = await axios.get(`${domain}/api/editions/eddgroup/${name}`, {
        params: {
            offset: page * numTitles,
            limit: numTitles,
        },
    });

    return {
        data: res.data.data.editions,
        page: res.data.data.editions.length != 0 ? page + 1 : page,
    } as Titles;
}

type FilmData = { data: TitleType & { films: Film[] }; page: number };
export async function getFilms(id: string, page = 1, numFilms = 20) {
    const res = await axios.get(`${domain}/api/editions/${id}`, {
        params: {
            offset: page * numFilms,
            limit: numFilms,
        },
    });
    return {
        data: res.data.data,
        page: res.data.data.films.length != 0 ? page + 1 : page,
    } as FilmData;
}
