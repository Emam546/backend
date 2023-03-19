import mongoose from "mongoose";

const schema = new mongoose.Schema<Companies>({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        required: true,
    },
});

export default mongoose.model("company", schema);
