export default function Footer() {
    return (
        <footer className="footer mt-16 pb-10 ml-[6rem]">
            <div className="flex flex-wrap">
                <div className="basis-full sm:basis-3/12">
                    <div className="pr-7">
                        <h4 className="text-white-off-1 mb-5 font-medium">
                            Company
                        </h4>
                        <ul className="list-none text-white-off-2 text-sm">
                            <li className="mb-2">
                                <a href="">Supported Devices</a>
                            </li>
                            <li className="mb-2">
                                <a href="">Internet based Ads</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="basis-full sm:basis-3/12">
                    <div className="pr-7">
                        <h4 className="text-white-off-1 mb-5 font-medium">
                            View Website In
                        </h4>
                        <ul className="list-none text-white-off-2 text-sm">
                            <li className="mb-2 flex gap-4 cursor-pointer">
                                <i className="fa-solid fa-check text-xl"></i>
                                <span>العربية</span>
                            </li>
                            <li className="mb-2 flex gap-4 cursor-pointer">
                                <i className="fa-solid fa-check text-xl invisible"></i>
                                <span>English</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="basis-full sm:basis-3/12">
                    <div className="pr-7">
                        <h4 className="text-white-off-1 mb-5 font-medium">
                            Need help ?
                        </h4>
                        <ul className="list-none text-white-off-2 text-sm">
                            <li className="mb-2">
                                <a href="">Help</a>
                            </li>
                            <li className="mb-2">
                                <a href="">Feedback</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="basis-full sm:basis-3/12">
                    <div>
                        <h4 className="text-white-off-1 mb-5 font-medium">
                            Connect with Us
                        </h4>
                        <ul className="list-none text-white-off-2 text-3xl flex flex-wrap gap-7">
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-square-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-instagram font-bold"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-white-off-3 text-xs mt-10 font-medium leading-5">
                <div className="flex flex-wrap gap-10 justify-between pr-10">
                    <div>
                        <p className="mb-2">
                            <a href="">©Disney. All rights reserved</a>
                        </p>
                        <ul className="flex-wrap flex gap-2">
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Cookie Policy</a>
                            </li>
                            <li>
                                <a href="">Subscriber Agreement</a>
                            </li>
                            <li>
                                <a href="">EMEA Privacy Rights</a>
                            </li>
                            <li>
                                <a href="">Manage Preferences</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-7 justify-between items-end">
                        <div className="h-10">
                            <a href="">
                                <img
                                    src="/images/google-playstore.webp"
                                    className="max-w-full max-h-full"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="h-10">
                            <a href="">
                                <img
                                    src="/images/ios-appstore.webp"
                                    className="max-w-full max-h-full"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
