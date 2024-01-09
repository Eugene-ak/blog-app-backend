import { Router } from "express";
import { createBlog } from "../controllers/create.controller";
import { findAllBlogs } from "../controllers/findAll.controller";

const router = Router();

router.post("/create", createBlog);
router.get("/getAll", findAllBlogs);

export default router;
