import { getFilmData } from "@src/api";
import { useLocalStorage } from "@src/hooks";
import { permTime } from "@src/constants";
import { getMainSourceUrl, getSourceImage } from "@src/utils";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import classNames from "classnames";
import type { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Footer from "@src/components/Footer";
interface ServerData {
    data?: Film;
}
const Page: NextPageWithLayout<ServerData> = ({ data }) => {
    const router = useRouter();
    const searchParams = router.query;
    const ref = searchParams.ref;
    const [lastTime, setlastTime] = useLocalStorage("lastTime", {
        time: Date.now() - permTime,
    });
    if (lastTime && lastTime.time + permTime <= Date.now())
        setlastTime({ time: Date.now() });

    return (
        <section className={classNames("subscribe min-h-screen px-14 pt-4")}>
            <div className="flex gap-5 items-center mb-6">
                <button
                    onClick={() => {
                        router;
                        if (typeof ref == "string") router.push(ref);
                        else router.back();
                    }}
                >
                    <i className="fa-solid fa-xmark text-3xl font-light"></i>
                </button>
                <img
                    src={getMainSourceUrl("images/logo-d-plus-horizontal.svg")}
                    className="pb-3"
                    alt="logo"
                />
            </div>
            <div className="flex gap-14">
                <div className="flex-1">
                    {data && (
                        <div className="bg-black-off-2 border-white-off-1 border-2 border-solid flex items-center aspect-[9/12] w-36 max-w-full rounded-lg overflow-hidden">
                            <img
                                className="w-full"
                                src={getSourceImage(data.thumbnails.portal)}
                                alt=""
                            />
                        </div>
                    )}
                    <h1 className="text-white-off-1 text-3xl font-semibold py-4">
                        Subscribe now and start streaming
                    </h1>
                    <ul className="list-none text-grey-2 text-sm">
                        <li className="flex gap-4 mt-2">
                            <i className="fa-solid fa-check mt-1"></i>
                            <p>
                                The streaming home of Disney, Pixar, Marvel,
                                Star Wars, National Geographic & Star
                            </p>
                        </li>
                        <li className="flex gap-4 mt-2">
                            <i className="fa-solid fa-check mt-1"></i>
                            <p>
                                Thousands of hours of TV series, movies and
                                documentaries for the whole family
                            </p>
                        </li>
                        <li className="flex gap-4 mt-2">
                            <i className="fa-solid fa-check mt-1"></i>
                            <p>
                                Cancel anytime (effective at the end of your
                                billing period)
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <ul className="list-none flex flex-wrap gap-y-11 text-sm text-center text-white-off-1">
                        <li className="basis-1/2 sm:basis-1/3">
                            <div className="w-24 max-w-full mx-auto px-3">
                                <div className="aspect-square w-14 mb-4 mx-auto">
                                    <img
                                        src={getMainSourceUrl(
                                            "images/Dub_v2@2x.png"
                                        )}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <p>Experience Disney+ content in Arabic</p>
                            </div>
                        </li>
                        <li className="basis-1/2 sm:basis-1/3">
                            <div className="w-24 max-w-full mx-auto px-3">
                                <div className="aspect-square w-14 mb-4 mx-auto">
                                    <img
                                        src={getMainSourceUrl(
                                            "images/Dplus-Originals.png"
                                        )}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <p>Exclusive originals</p>
                            </div>
                        </li>
                        <li className="basis-1/2 sm:basis-1/3">
                            <div className="w-24 max-w-full mx-auto px-3">
                                <div className="aspect-square w-14 mb-4 mx-auto">
                                    <img
                                        src={getMainSourceUrl(
                                            "images/Kids-Safe_v2@2x.png"
                                        )}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <p>Easy-to-use parental controls</p>
                            </div>
                        </li>
                        <li className="basis-1/2 sm:basis-1/3">
                            <div className="w-24 max-w-full mx-auto px-3">
                                <div className="aspect-square w-14 mb-4 mx-auto">
                                    <img
                                        src={getMainSourceUrl(
                                            "images/Kids-Safe_v2@2x.png"
                                        )}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <p>No ads or additional charges </p>
                            </div>
                        </li>
                        <li className="basis-1/2 sm:basis-1/3">
                            <div className="w-24 max-w-full mx-auto px-3">
                                <div className="aspect-square w-14 mb-4 mx-auto">
                                    <img
                                        src={getMainSourceUrl(
                                            "images/profiles_v2@2x.png"
                                        )}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <p>Create up to 7 profiles</p>
                            </div>
                        </li>
                        <li className="basis-1/2 sm:basis-1/3">
                            <div className="w-24 max-w-full mx-auto px-3">
                                <div className="aspect-square w-14 mb-4 mx-auto">
                                    <img
                                        src={getMainSourceUrl(
                                            "images/4-Devices_v2@2x.png"
                                        )}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <p>Stream on up to 4 devices at once</p>
                            </div>
                        </li>
                    </ul>
                    <form
                        className="choose-plan"
                        action="#"
                        method="post"
                    >
                        <div className="choose-plan-radio flex gap-3 text-sm font-medium mt-20">
                            <div className="flex-1">
                                <input
                                    id="planRadio"
                                    type="radio"
                                    name="plan"
                                    value="1"
                                    className="border border-solid border-white"
                                    defaultChecked={true}
                                />
                                <label
                                    htmlFor="planRadio"
                                    className="r"
                                >
                                    <sup className="px-1">EGP</sup>
                                    <span className="text-lg font-semibold">
                                        49.9
                                    </span>
                                    <small className="px-1">/Month</small>
                                </label>
                            </div>
                            <div className="flex-1">
                                <input
                                    id="planRadio2"
                                    type="radio"
                                    name="plan"
                                    value="1"
                                    className="border border-solid border-white"
                                />
                                <label htmlFor="planRadio2">
                                    <sup className="px-2">EGP</sup>
                                    <span className="text-lg">490.9</span>
                                    <small className="px-1">/Year</small>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="rounded py-3 w-full mt-8 cursor-pointer flex items-center justify-center"
                        >
                            <span className="px-2">Continue</span>
                            <i className="fa-solid fa-chevron-right text-sm"></i>
                        </button>
                    </form>
                    <ul className="text-xs text-white-off-3 mt-8">
                        <li className="mb-4 flex gap-4">
                            <i className="fa-solid fa-circle text-[6px] mt-2"></i>
                            <p>
                                When purchasing an annual subscription, the
                                annual price is equivalent to 10 months of the
                                monthly subscription price.
                            </p>
                        </li>
                        <li className="mb-4 flex gap-4">
                            <i className="fa-solid fa-circle text-[6px] mt-2"></i>

                            <p>
                                If you subscribe to Disney+, we will charge a
                                recurring monthly or annual fee (or equivalent)
                                to your stored payment method.
                            </p>
                        </li>
                        <li className="mb-4 flex gap-4">
                            <i className="fa-solid fa-circle text-[6px] mt-2"></i>
                            <p>
                                Cancellations must be received at least 24 hours
                                before the end of the current billing period to
                                be effective at the end of that period.
                            </p>
                        </li>
                        <li className="mb-4 flex gap-4">
                            <i className="fa-solid fa-circle text-[6px] mt-2"></i>
                            <p>
                                No refunds or credits will be given for partial
                                months or years (or equivalents), unless
                                required by law.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export const getServerSideProps: GetServerSideProps<ServerData> = async (
    ctx
) => {
    const name = ctx.query.name;
    if (typeof name != "string")
        return {
            props: {},
        };
    const data = await getFilmData(name);
    return {
        props: {
            data,
        },
    };
};
Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            {page}
            <Footer />
        </>
    );
};
export default Page;
