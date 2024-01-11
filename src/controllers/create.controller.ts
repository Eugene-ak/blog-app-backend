import { Request, Response } from 'express';
import { blogValidation } from '../validations/blog.validation';
import BlogSchema from '../schema/blog.schema';
import { IBlog } from '../interfaces/blog.interface';

export const createBlog = async (req: Request, res: Response) => {
  try {
    const data: IBlog = await blogValidation.validateAsync(req.body);
    const { heading } = data;

    const oldBlog = await BlogSchema.findOneByHeading({ heading: heading });
    if (oldBlog) {
      res.status(409).json({
        message: `Record already exists with heading: ${heading}`,
      });
    } else {
      const newPost = await BlogSchema.create(data);
      res.status(201).json({ newPost });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
