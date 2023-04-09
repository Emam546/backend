/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import "./App.scss";
import { SharedLayout } from "./Sharedlayout";
// import NavBar from "./components/header";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import Company, { loader as CompanyLoader } from "./pages/company";
import Movie, { loader as MovieLoader } from "./pages/movie";
import PageRouter, { loader as PageLoader } from "./pages/page";
import Subscribe from "./pages/subscribe";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { pageActions } from "./store";
import queryClient from "./queryClient";
import Search from "./pages/search";
function Page404() {
    return <Navigate to="/" />;
}
function App() {
    const dispatch = useDispatch();
    function WrapFunct<
        T extends (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>
    >(f: T) {
        return async (...p: Parameters<T>) => {
            dispatch(pageActions.setLoading(true));
            const res = await f(...p);
            dispatch(pageActions.setLoading(false));
            return res;
        };
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/subscribe"
                    element={
                        <>
                            <Subscribe />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/"
                    element={<SharedLayout />}
                    errorElement={<Page404 />}
                >
                    <Route
                        path="/"
                        element={<Home />}
                        loader={WrapFunct(homeLoader(queryClient))}
                        
                    />
                    <Route
                        path="/search"
                        element={<Search />}
                    />
                    <Route
                        path="/movies/:name"
                        element={<Movie />}
                        loader={WrapFunct(MovieLoader(queryClient))}
                    />
                    <Route
                        path="/company/:name"
                        element={<Company />}
                        loader={WrapFunct(CompanyLoader(queryClient))}
                    />
                    <Route
                        path="/:name"
                        element={<PageRouter />}
                        loader={WrapFunct(PageLoader(queryClient))}
                        errorElement={<Page404 />}
                    />
                    <Route
                        path="*"
                        element={<Page404 />}
                    />
                </Route>
            </>
        ),
    );
    return <RouterProvider router={router} />;
}

export default App;
