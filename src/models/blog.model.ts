import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    field: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
});

export default mongoose.model("blog", blogSchema);
