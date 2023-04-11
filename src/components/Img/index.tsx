import { useEffect, useRef } from "react";
export default function Img({
    src,
    block,
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { block?: boolean }) {
    const ref = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        if (!ref.current || !src) return;
        const lastState = ref.current.style.display;
        const img = new Image();
        img.onload = () => {
            if (!ref.current) return;
            ref.current.src = img.src;
            if (block) ref.current.style.display = lastState;
        };
        if (block) ref.current.style.display = "none";
        img.src = src;
        return () => {
            img.src = "";
            if (ref.current) ref.current.style.display = lastState;
        };
    }, [ref, src]);
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            {...props }
            ref={ref}
        />
    );
}
