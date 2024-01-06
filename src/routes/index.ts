import { Router } from "express";
import { createBlog } from "../controllers/create.controller";

const router = Router();

router.post("/create", createBlog);

export default router;