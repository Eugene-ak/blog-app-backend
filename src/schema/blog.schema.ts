import mongoose, { FilterQuery, QueryOptions, _FilterQuery } from 'mongoose';
import { IBlog } from '../interfaces/blog.interface';
import blogModel from '../models/blog.model';

export default class BlogSchema {
  static create = async (input: IBlog) => {
    try {
      const newBlog = await blogModel.create(input);
      return newBlog;
    } catch (error: any) {
      throw error;
    }
  };

  static findOneByHeading = async (query: FilterQuery<IBlog>) => {
    try {
      const blog = await blogModel.findOne(query);
      return blog;
    } catch (error: any) {
      throw error;
    }
  };

  static findAll = async () => {
    try {
      const allBlogs = await blogModel.find();
      return allBlogs;
    } catch (error: any) {
      throw error;
    }
  };

  static findOneById = async (id: mongoose.Types.ObjectId) => {
    try {
      const foundBlog = await blogModel.findById(id);
      return foundBlog;
    } catch (error: any) {
      throw error;
    }
  };

  static updateOne = async (id: mongoose.ObjectId, input: any) => {
    try {
      const updatedBlog = await blogModel.updateOne(
        { id },
        { $set: { ...input } },
      );
    } catch (error: any) {
      throw error;
    }
  };
}
