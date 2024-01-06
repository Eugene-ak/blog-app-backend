import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const uri = process.env.DB_URI as string;
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri);
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed");
        // process.exit(1);
    }
}

export default connectDb;
