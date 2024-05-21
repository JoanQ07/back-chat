import { errorHttp, resHttp } from "../../helper";
import { Response, Request } from "express";
import { friendshipService } from "./services";
import mongoose from "mongoose";

const addFriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.body;
    if (!userId || !friendId) {
      return errorHttp({ res, message: "UserId and FriendId are required" });
    }

    await friendshipService.addFriend(new mongoose.Types.ObjectId(userId), new mongoose.Types.ObjectId(friendId));

    return resHttp({
      res,
      data: null,
      message: `Friend added successfully`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error.message });
  }
};

const getFriends = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return errorHttp({ res, message: "UserId is required" });
    }

    const friends = await friendshipService.getFriends(new mongoose.Types.ObjectId(userId));

    return resHttp({
      res,
      data: friends,
      message: `Friends retrieved successfully`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error.message });
  }
};

const removeFriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.body;
    if (!userId || !friendId) {
      return errorHttp({ res, message: "UserId and FriendId are required" });
    }

    await friendshipService.removeFriend(new mongoose.Types.ObjectId(userId), new mongoose.Types.ObjectId(friendId));

    return resHttp({
      res,
      data: null,
      message: `Friend removed successfully`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error.message });
  }
};

export const friendshipController = { addFriend, getFriends, removeFriend };