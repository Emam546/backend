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
export default (mongoose.models && (mongoose.models.user as model)) ||
    mongoose.model("user", schema);
