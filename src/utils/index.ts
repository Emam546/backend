import { domain } from "../constants";

export function hasOwnProperty<K extends PropertyKey, T>(
    obj: unknown,
    key: K
): obj is Record<K, T> {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
export function getSourceUrl(name: string) {
    return new URL(`/src/${name}`, domain).toString();
}

export function PayUrl(name: string, path?: string) {
    const checkUrl = new URLSearchParams();
    checkUrl.set("content", name);
    if (path) checkUrl.set("ref", path);
    return `/subscribe/?${checkUrl.toString()}`;
}
