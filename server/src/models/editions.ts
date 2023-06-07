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
type TSchema = typeof schema;
type model = mongoose.Model<
    mongoose.InferSchemaType<TSchema>,
    mongoose.ObtainSchemaGeneric<TSchema, "TQueryHelpers">,
    mongoose.ObtainSchemaGeneric<TSchema, "TInstanceMethods">,
    mongoose.ObtainSchemaGeneric<TSchema, "TVirtuals">,
    mongoose.HydratedDocument<
        mongoose.InferSchemaType<TSchema>,
        mongoose.ObtainSchemaGeneric<TSchema, "TVirtuals"> &
            mongoose.ObtainSchemaGeneric<TSchema, "TInstanceMethods">,
        mongoose.ObtainSchemaGeneric<TSchema, "TQueryHelpers">
    >,
    TSchema
> &
    mongoose.ObtainSchemaGeneric<TSchema, "TStaticMethods">;
export default (mongoose.models && (mongoose.models.editions as model)) ||
    mongoose.model("editions", schema);
