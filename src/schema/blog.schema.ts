import { FilterQuery, QueryOptions } from "mongoose";
import { IBlog } from "../interfaces/blog.interface";
import blogModel from "../models/blog.model";

export default class BlogSchema {
    static create = async (input: IBlog) => {
        try {
            const newBlog = await blogModel.create(input);
            return newBlog;
        } catch (error) {
            throw error;
        }
    }

    static findOne = async (query: FilterQuery<IBlog>) => {
        try {
            const blog = await blogModel.findOne(query);
            return blog;
        } catch (error) {
            throw error;
        }
    }
}
