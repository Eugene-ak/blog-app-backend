import { Router } from "express";
import { createBlog } from "../controllers/create.controller";
import { findAllBlogs } from "../controllers/findAll.controller";
import { findOneBlog } from "../controllers/findOne.controller";

const router = Router();

router.post("/create", createBlog);
router.get("/getAll", findAllBlogs);
router.get("/:id", findOneBlog);

export default router;
