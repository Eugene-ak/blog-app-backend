import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const port = process.env.PORT;
const app = express();

try {
    const URI = process.env.DB_URI as string;
    mongoose.set("strictQuery", false);
    mongoose.connect(URI, {
        autoIndex: true,
    });
    // check if database is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });
    // check if database is connected
    console.log(`Database connected 🚀`);

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
} catch (error) {
    console.log(error);
    throw new Error('Error connecting to database');
}
