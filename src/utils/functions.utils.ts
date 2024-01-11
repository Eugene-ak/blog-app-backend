import mongoose from "mongoose";

export const CastToId = (id: string) => new mongoose.Types.ObjectId(id);