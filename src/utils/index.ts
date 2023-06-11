import { CloudinaryImage, CloudinaryVideo } from "@cloudinary/url-gen";
import IURLConfig from "@cloudinary/url-gen/config/interfaces/Config/IURLConfig";
import { Document } from "mongoose";

export function hasOwnProperty<K extends PropertyKey, T>(
    obj: unknown,
    key: K
): obj is Record<K, T> {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
export function getSourceImage(id: string, options?: IURLConfig) {
    const myImage = new CloudinaryImage(
        id,
        {
            cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
        },
        {
            ...options,
            analytics: false,
            secure: false,
        }
    );

    return myImage.toURL();
}
export function getSourceVideo(id: string, options?: IURLConfig) {
    const data = new CloudinaryVideo(
        id,
        {
            cloudName: "ddlnc8ycf",
        },
        options
    );

    return data.toURL();
}
export function getMainSourceUrl(url: string) {
    return `/${url}`;
}
export function PayUrl(name: string, path?: string) {
    const checkUrl = new URLSearchParams();
    checkUrl.set("content", name);
    if (path) checkUrl.set("ref", path);
    return `/subscribe/?${checkUrl.toString()}`;
}

export const serialize = <T>(val: T): T => {
    return JSON.parse(JSON.stringify(val));
};
