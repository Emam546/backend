import EnvVars from "../../data/declarations/major/EnvVars";
import { v2 as cloudinary } from "cloudinary";
export default () => {
    cloudinary.config(EnvVars.cloudinary);
};
// Configuration
