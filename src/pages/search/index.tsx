import { useDispatch } from "react-redux";
import { pageActions } from "@src/store";

export function SearchInput() {
    return (
        <form
            action=""
            method="post"
        >
            <div className="flex items-center bg-black-off-2 px-5 text-white-off-1">
                <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                <input
                    type="search"
                    className="flex-1 text-lg px-5 py-4 bg-black-off-2 self-stretch focus:outline-none"
                    placeholder="Movies, shows and more"
                />
            </div>
        </form>
    );
}
export default function Search() {
    const dispatch = useDispatch();
    dispatch(pageActions.setLoading(false));
    return (
        <section
            id="search"
            className="ml-[6rem] pt-10 pr-5 min-h-screen"
        >
            <SearchInput />
        </section>
    );
}
