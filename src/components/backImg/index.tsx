import { useEffect, useRef } from "react";

export default function BackImg({
    src,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & { src: string }) {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!ref.current || !src) return;
        ref.current.style.backgroundImage = "";
        const img = new Image();
        img.onload = () => {
            if (!ref.current) return;
            ref.current.style.backgroundImage = `url('${img.src}')`;
        };
        img.src = src;
        return () => {
            img.src = "";
        };
    }, [ref, src]);
    return (
        <div
            {...props}
            ref={ref}
        >
            {children}
        </div>
    );
}
