import EnvVars from "@src/declarations/major/EnvVars";
import { v2 as cloudinary } from "cloudinary";
export default () => {
    cloudinary.config(EnvVars.cloudinary);
};
// Configuration
