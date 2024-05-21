import mongoose, { Schema, model } from "mongoose";
import {IUser} from '../user/model';

export interface IChat {
  _id?: mongoose.Schema.Types.ObjectId;
  idsUsers: Array<mongoose.Types.ObjectId | IUser>;
  updatedAt: string;
}

export const chat = model<IChat>(
  "chats",
  new Schema<IChat>(
    {
      _id: { type: mongoose.Schema.Types.ObjectId },
      idsUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    },
    {
      timestamps: true,
      versionKey: false,
    }
  )
);
