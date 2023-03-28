import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useForceUpdate } from "../../hooks";

export default function Slider({
    children,
    ...props
}: {
    children: React.ReactNode;
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) {
    const container = useRef<HTMLDivElement>(null);
    const [left, setLeft] = useState(0);
    const forceUpdate = useForceUpdate();
    useEffect(() => {
        const slider = container.current;
        if (!slider) return;
        let isPressed = false;
        let startX = 0;
        let scrollLeft = 0;
        let moved = false;
        const MouseDown = (e: MouseEvent) => {
            isPressed = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        const mouseUp = () => {
            isPressed = false;
            if (moved) {
                const curScroll = slider.clientWidth;
                const curPos = slider.scrollLeft + slider.clientWidth / 2;
                const num = Math.max(
                    0,
                    Math.round(curPos / slider.clientWidth - 0.5)
                );
                slider.scrollTo({ left: num * curScroll, behavior: "smooth" });
                setLeft(num * curScroll);
                moved = false;
            }
        };
        const mouseMove = (e: MouseEvent) => {
            if (!isPressed) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
            setLeft(slider.scrollLeft);
            moved = true;
        };
        slider.addEventListener("mousedown", MouseDown);
        slider.addEventListener("mouseleave", mouseUp);
        document.addEventListener("mouseup", mouseUp);
        slider.addEventListener("mousemove", mouseMove);
        return () => {
            slider.removeEventListener("mousedown", MouseDown);
            slider.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
            slider.removeEventListener("mouseleave", mouseUp);
        };
    }, [container]);

    function Slide(dir: -1 | 1) {
        const slider = container.current;
        if (!slider) return;

        const slide = Math.max(
            Math.min(
                slider.scrollLeft + slider.clientWidth * dir,
                slider.scrollWidth
            ),
            0
        );
        slider.scrollTo({
            left: slide,
            behavior: "smooth",
        });
        setLeft(slide);
    }
    useEffect(() => {
        if (slider) forceUpdate();
    }, [children]);
    const slider = container.current;
    useEffect(() => {
        if (slider) forceUpdate();
    }, [slider]);
    return (
        <>
            <div className="overflow-visible relative group">
                <button
                    onClick={() => Slide(-1)}
                    className={classNames(
                        "absolute text-2xl left-0 top-1/2 translate-y-[-50%] h-full w-[6%] bg-black/70 opacity-0 hover:opacity-100 group-hover:opacity-100 z-10 transition-all duration-300 cursor-pointer",
                        {
                            hidden:
                                left <= 10 ||
                                (slider &&
                                    slider.scrollWidth <
                                        slider.clientWidth + 10),
                        }
                    )}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                    onClick={() => Slide(1)}
                    className={classNames(
                        "absolute text-2xl right-0 top-1/2 translate-y-[-50%] h-full w-[6%] bg-black/70 opacity-0 hover:opacity-100 group-hover:opacity-100 z-10 transition-all duration-300 cursor-pointer",
                        {
                            hidden:
                                slider &&
                                (slider.scrollWidth -
                                    left -
                                    slider.clientWidth <
                                    10 ||
                                    slider.scrollWidth == slider.clientWidth),
                        }
                    )}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
                <div
                    {...props}
                    ref={container}
                >
                    {children}
                </div>
            </div>
        </>
    );
}
