import dataContext from "../../helper/dataContext";
import { IFriend } from './model';
import mongoose from 'mongoose';

const addFriend = async (userId: mongoose.Types.ObjectId, friendId: mongoose.Types.ObjectId): Promise<void> => {
  try {
    let friendship: IFriend | null = await dataContext.friend.findOne({ user: userId });

    if (!friendship) {
      friendship = await dataContext.friend.create({ user: userId, friends: [] });
    }

    friendship.friends.push(friendId);
    dataContext.friend.updateOne(friendship);

  } catch (error) {
    throw error;
  }
};

const getFriends = async (userId: mongoose.Types.ObjectId): Promise<any> => {
  try {
    const friendship: IFriend | null = await dataContext.friend.findOne({ user: userId });
    return friendship ? friendship.friends : [] ;
  } catch (error) {
    throw error;
  }
};

const removeFriend = async (userId: mongoose.Types.ObjectId, friendId: mongoose.Types.ObjectId): Promise<void> => {
  try {
    const friendship: IFriend | null = await dataContext.friend.findOne({ user: userId });

    if (friendship) {
      friendship.friends = friendship.friends.filter(friend => friend.toString() !== friendId.toString());
      dataContext.friend.updateOne(friendship);
    }
  } catch (error) {
    throw error;
  }
};

export const friendshipService = { addFriend, getFriends, removeFriend };