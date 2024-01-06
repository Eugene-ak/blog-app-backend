import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.config';
dotenv.config();

const port = process.env.PORT;
const app = express();

connectDb();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
