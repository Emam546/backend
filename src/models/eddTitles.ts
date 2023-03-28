import mongoose from "mongoose";
import editionDB from "./editions";
const schema = new mongoose.Schema<CompanyEdition>({
    name: {
        type: String,
        required: true,
    },
    editions: {
        type: [mongoose.Types.ObjectId],
        ref: editionDB,
        required: true,
    },
});

export default mongoose.model("eddGroup", schema);
