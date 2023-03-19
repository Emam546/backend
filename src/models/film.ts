import mongoose from "mongoose";
import CompaniesDB from "./Companies";
const schema = new mongoose.Schema<Film>({
    name: {
        type: String,
        min: 2,
        required: true,
    },
    company: {
        type: mongoose.Types.ObjectId,
        ref: CompaniesDB,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    bottom: {
        type: [String],
        required: true,
    },
    lang: {
        type: [String],
        required: true,
    },
    thumbnails: {
        required: true,
    },
    head: {
        type: [String],
        required: true,
    },
});
schema.index({ name: 1 });
schema.index({ company: 1 });
export default mongoose.model("film", schema);
