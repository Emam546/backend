import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import FilmPopUp from "./components/show";
import LoadingState from "./components/loading";
import Footer from "./components/Footer";
import { useLocalStorage } from "./hooks";
import { permTime } from "./constants";

export function SharedLayout() {
    const [lastTime, ] = useLocalStorage("lastTime", {
        time: Date.now() - permTime,
    });

    const loc = useLocation();
    if (lastTime.time + permTime <= Date.now()) {
        return <Navigate to={`/subscribe?ref=${loc.pathname}`} />;
    }

    return (
        <>
            <LoadingState />
            <NavBar />
            <Outlet />
            <FilmPopUp />
            <Footer />
        </>
    );
}
