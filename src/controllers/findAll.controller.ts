import { Request, Response } from 'express';
import BlogSchema from '../schema/blog.schema';

export const findAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogSchema.findAll();
    res.status(200).json({blogs});
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
