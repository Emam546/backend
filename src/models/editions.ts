import mongoose from "mongoose";
import FilmDB from "./film";
const schema = new mongoose.Schema<Edition>({
    name: {
        type: String,
        min: 2,
        required: true,
    },
    films: {
        type: [mongoose.Types.ObjectId],
        ref: FilmDB,
        required: true,
    },
    
});
export default mongoose.model("editions", schema);
