import { useAppSelector } from "../../store";
import "./style.scss";
export default function LoadingState() {
    const isLoading = useAppSelector((state) => state.page.isLoading);

    if (!isLoading) return null;
    return (
        <div className="loading-bar fixed top-0 left-0 w-full h-[4px] z-20">
            <div className="h-full"></div>
        </div>
    );
}
