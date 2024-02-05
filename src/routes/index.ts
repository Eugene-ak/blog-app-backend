import { Router } from "express";
import { createBlog } from "../controllers/create.controller";
import { findAllBlogs } from "../controllers/findAll.controller";
import { findOneBlog } from "../controllers/findOne.controller";
import { updateOneBlog } from "../controllers/updateOne.controller";
import { deleteOneBlog } from "../controllers/deleteOne.controller";

const router = Router();

router.post("/create", createBlog);
router.get("/getAll", findAllBlogs);
router.get("/:id", findOneBlog);
router.put("/update/:id", updateOneBlog);
router.delete("/delete/:id", deleteOneBlog);

export default router;
