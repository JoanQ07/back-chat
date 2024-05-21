import dataContext from "../../helper/dataContext";
import { IMessage } from "../messages/model";
import mongoose from "mongoose";
import { IChat } from "./model";

const registerChat = async (data: IChat) => {
  try {
    const newChat = await dataContext.chat.create({
      ...data,
      _id: new mongoose.Types.ObjectId()
    });
    return newChat;
  } catch (error) {
    throw error;
  }
};

const searchChatsByUser = async (idUser?: string): Promise<Array<any>> => {
  try {
    const chat = await dataContext.chat.find({ idsUsers: { $in: [idUser] } }).populate("idsUsers");

    const chatAddLastMsg: any = await Promise.all(
      chat.map(async (el) => ({
        ...el.toObject(),
        lastMsg: (await searchLastMsgByChat(el._id)) || null,
      }))
    );

    return chatAddLastMsg;
  } catch (error) {
    throw error;
  }
};

const searchLastMsgByChat = async (idChat: mongoose.Schema.Types.ObjectId): Promise<IMessage> => {
  const [lastMsg] = await dataContext.message.aggregate([
    {
      $match: { idChat },
    },
    {
      $sort: { createdAt: -1 },
    },
    {
      $limit: 1,
    },
  ]);

  return lastMsg;
};
export const servicesChat = { registerChat, searchChatsByUser };
