import { Request, Response } from "express";
import BlogSchema from "../schema/blog.schema";
import { CastToId } from "../utils/functions.utils";

export const deleteOneBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    await BlogSchema.deleteOneById(CastToId(id));
    res.status(204).json({message: "Deleted successfully"});

  } catch (error: any) {
    res.status(401).json({error: error.message});
  }
}