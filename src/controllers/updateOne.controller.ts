import { Request, Response } from "express";
import BlogSchema from "../schema/blog.schema";
import { CastToId } from "../utils/functions.utils";
import { IBlog } from "../interfaces/blog.interface";
import { blogValidation } from "../validations/blog.validation";

export const updateOneBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const foundBlog = await BlogSchema.findOneById(CastToId(id));

    if (!foundBlog) {
      res.status(404).json({message: "Record with matching id cannot be found"});
    }

    const data: IBlog = await blogValidation.validateAsync(req.body);
    const newBlog = await foundBlog?.updateOne({$set: {...data}});

    res.status(200).json({newBlog});
  } catch (error: any) {
    res.status(400).json({error: error.message});
  }
}