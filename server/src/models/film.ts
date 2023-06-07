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
        type: [Object],
        required: true,
    },
    lang: {
        type: [Object],
        required: true,
    },
    thumbnails: {
        type:Object,
        required: true,
    },
    head: {
        type: [Object],
        required: true,
    },
});
schema.index({ name: 1 });
schema.index({ company: 1 });
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
export default (mongoose.models && (mongoose.models.film as model)) ||
    mongoose.model("film", schema);
