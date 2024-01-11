import { Request, Response } from 'express';
import BlogSchema from '../schema/blog.schema';
import { CastToId } from '../utils/functions.utils';

export const findOneBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const foundBlog = await BlogSchema.findOneById(CastToId(id));

    res.status(200).json(foundBlog);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
