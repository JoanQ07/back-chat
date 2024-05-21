import mongoose, { Decimal128, Schema, model } from "mongoose";

export interface IUser {
  id: mongoose.Schema.Types.ObjectId;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export const user = model<IUser>("users", new Schema<IUser>(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
));