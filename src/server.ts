import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.config';
import router from './routes';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/api/blog", router);

connectDb();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
