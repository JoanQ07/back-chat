import mongoose, { Schema, model } from 'mongoose';
import { IUser } from '../user/model';

export interface IFriend {
  _id?: mongoose.Schema.Types.ObjectId;
  user: mongoose.Types.ObjectId | IUser;
  friends: Array<mongoose.Types.ObjectId | IUser>;
  updatedAt: string;
}

export const friend = model<IFriend>(
  'Friend',
  new Schema<IFriend>(
    {
      _id: { type: mongoose.Schema.Types.ObjectId },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
      friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    },
    {
      timestamps: true,
      versionKey: false,
    }
  )
);