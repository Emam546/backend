import { CloudinaryImage, CloudinaryVideo } from "@cloudinary/url-gen";

// Render the image in a React component.

export function hasOwnProperty<K extends PropertyKey, T>(
    obj: unknown,
    key: K
): obj is Record<K, T> {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
export function getSourceImage(id: string) {
    const myImage = new CloudinaryImage(id, {
        cloudName: "ddlnc8ycf",
    });

    return myImage.toURL();
}
export function getSourceVideo(id: string) {
    const data = new CloudinaryVideo(id, {
        cloudName: "ddlnc8ycf",
    });

    return data.toURL();
}

export function PayUrl(name: string, path?: string) {
    const checkUrl = new URLSearchParams();
    checkUrl.set("content", name);
    if (path) checkUrl.set("ref", path);
    return `/subscribe/?${checkUrl.toString()}`;
}
