import mongoose from "mongoose";

const schema = new mongoose.Schema<Company>({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: Object,
        required: true,
    },
});
schema.index({ name: 1 });
export default mongoose.model("company", schema);
