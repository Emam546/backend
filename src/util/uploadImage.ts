import EnvVars from "@src/declarations/major/EnvVars";
import {
    ConfigAndUrlOptions,
    TransformationOptions,
    v2 as cloudinary,
} from "cloudinary";

// Configuration
cloudinary.config({
    cloud_name: EnvVars.cloudinary.cloud_name,
    api_key: EnvVars.cloudinary.api_key,
    api_secret: EnvVars.cloudinary.api_secret,
});

// Upload

export async function Upload(src: string, public_id: string) {
    return await cloudinary.uploader.upload(src, { public_id });
}
export default function GetUrl(
    public_id: string,
    options?: TransformationOptions | ConfigAndUrlOptions
) {
    return cloudinary.url(public_id, options);
    // The output url
    // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
}
