import mongoose from "mongoose";
const schema = new mongoose.Schema<User>({
    name: {
        type: String,
        min: 2,
        required: true,
    },
    age: {
        type: [String],
        min: 2,
        required: true,
    },
    phone: {
        type: String,
        min: 2,
        required: true,
    },
});

export default mongoose.model("user", schema);
