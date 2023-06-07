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
export default (mongoose.models && (mongoose.models.company as model)) ||
    mongoose.model("company", schema);
