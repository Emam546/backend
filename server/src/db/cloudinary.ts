import EnvVars from "@serv/declarations/major/EnvVars";
import { v2 as cloudinary } from "cloudinary";
export default function config() {
    cloudinary.config(EnvVars.cloudinary);
}
// Configuration
