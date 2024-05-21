import dataContext from "../../helper/dataContext";
import { resHttpIO } from "../../helper";
import { ObjectId } from "mongodb";
import { IMessage } from "./model";
import { io } from "../../index";

const registerMessage = async (data: IMessage) => {
  try {
    const newMessage = await dataContext.message.create({
      _id: new ObjectId(),
      ...data,
    });

    io.emit("saveMessageChat", resHttpIO({ data }));
    return newMessage;
  } catch (error) {
    throw error;
  }
};

const searchMessagesByChat = async (idChat?: string): Promise<Array<IMessage>> => {
  try {
    const messages = await dataContext.message.find({ idChat }).populate("idUser");
    return messages;
  } catch (error) {
    throw error;
  }
};

const deleteAll = async () => {
  try {
    const messages = await dataContext.message.deleteMany({});
    return messages;
  } catch (error) {
    throw error;
  }
};
export const servicesMessage = { registerMessage, searchMessagesByChat, deleteAll };
