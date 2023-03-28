import { Link } from "react-router-dom";
import { getSourceUrl } from "../../../utils";
import Img from "../../../components/Img";

export default function Companies({ data }: { data: Company[] }) {
    return (
        <div className="pb-10 pr-5 md:pr-10">
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4`}
            >
                {data.map(({ name, thumbnail, _id }) => {
                    return (
                        <div
                            key={_id}
                            className="aspect-video relative rounded-lg overflow-hidden group hover:scale-125 transition bg-black-off-2 hover:z-10 duration-500"
                        >
                            <Link to={`/company/${name.split(" ").join("-")}`}>
                                <video
                                    src={getSourceUrl(thumbnail.home.video)}
                                    className="w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    autoPlay={true}
                                    loop={true}
                                    playsInline={true}
                                    preload="true"
                                ></video>
                                <Img
                                    src={getSourceUrl(thumbnail.home.image)}
                                    alt={name}
                                    className="capitalize after:content-[attr(alt)] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:bg-black-off-2 after:text-center text-white/60 absolute top-1/2 left-1/2 transition-opacity duration-500 group-hover:opacity-0  -translate-x-1/2 -translate-y-1/2 z-1"
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
