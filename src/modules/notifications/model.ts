import mongoose, { Schema, model } from 'mongoose';
import { IUser } from '../user/model';

export interface INotification {
  _id?: mongoose.Schema.Types.ObjectId;
  user: mongoose.Types.ObjectId | IUser;
  message: string;
  read: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const notificationSchema = new Schema<INotification>(
  {
    _id: { type: mongoose.Schema.Types.ObjectId },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const notification = model<INotification>('Notification', notificationSchema);