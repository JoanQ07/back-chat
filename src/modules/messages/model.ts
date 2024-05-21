import mongoose, { Decimal128, Schema, model } from "mongoose";

export interface IMessage {
  _id?: mongoose.Schema.Types.ObjectId;
  idUser: mongoose.Schema.Types.ObjectId;
  idChat: mongoose.Schema.Types.ObjectId;
  text?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const message = model<IMessage>(
  "messages",
  new Schema<IMessage>(
    {
      _id: { type: mongoose.Schema.Types.ObjectId },
      idUser: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      idChat: { type: mongoose.Schema.Types.ObjectId },
      text: String,
    },
    {
      timestamps: true,
      versionKey: false,
    }
  )
);
