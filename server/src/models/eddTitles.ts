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
export default (mongoose.models && (mongoose.models.eddGroup as model)) ||
    mongoose.model("eddGroup", schema);
