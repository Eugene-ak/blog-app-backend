import { NextFunction, Request, Response } from 'express';
import { blogValidation } from '../validations/blog.validation';
import BlogSchema from '../schema/blog.schema';
import { IBlog } from '../interfaces/blog.interface';

export const createBlog = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const data: IBlog = await blogValidation.validateAsync(req.body);
        const { heading } = data;

        const oldBlog = await BlogSchema.findOne({ heading: heading });
        if (oldBlog) {
            res.status(409).json({message: `Record already exists with heading: ${heading}`});
        } else {
            const newPost = await BlogSchema.create(data);
            res.status(201).json({ newPost });
        }
    } catch (error: any) {
        next();
    }
};
