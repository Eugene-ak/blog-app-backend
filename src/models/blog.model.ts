import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, "Heading is required!!"]
    },
    field: {
        type: String
    },
    content: {
        type: String,
        required: [true, "You forgot to add content to your post!!"]
    },
    author: {
        type: String,
        required: [true, "Your post needs an author!!"]
    },
    date: {
        type: Date,
        required: [true, "Your post needs a date!!"]
    }
},
{
    timestamps: true
});

export default mongoose.model("blog", blogSchema);
