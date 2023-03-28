import { useLocalStorage } from "../../hooks";

export default function BtnSaveToWatchLater({ id }: { id: string }) {
    const [ids, setids] = useLocalStorage("saveLib", [] as string[]);
    return (
        <button
            onClick={() => {
                if (!ids.some((val) => val == id)) {
                    return setids((pre) => [...pre, id]);
                } else setids((pre) => pre.filter((val) => val != id));
            }}
            className="bg-[#212226] rounded-lg transition-all  hover:bg-white/30 duration-500 p-4 text-white font-semibold flex justify-center items-center"
        >
            {ids.some((val) => val == id) ? (
                <i className="fa-solid fa-check"></i>
            ) : (
                <i className="fa-solid fa-plus"></i>
            )}
        </button>
    );
}
