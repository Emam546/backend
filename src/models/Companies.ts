import mongoose from "mongoose";

const schema = new mongoose.Schema<Company>({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type:Object,
        required: true,
    },
});

export default mongoose.model("company", schema);
