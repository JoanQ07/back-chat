import { errorHttp, resHttp } from "../../helper";
import { Response, Request } from "express";
import { servicesChat } from "./services";
import mongoose from "mongoose";

const registerChat = async ({ body }: Request, res: Response) => {
  try {
    console.log("💠  body--> ", body)
    const data = await servicesChat.registerChat(body);

    return resHttp({
      res,
      data,
      message: `Chat registrado exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};

const searchChatsByUser = async ({ query }: Request, res: Response) => {
  try {
    const data = await servicesChat.searchChatsByUser(query.idUser?.toString());
    if (data.length < 1) {
      return resHttp({
        res,
        data,
        message: `Sin chats registrados`,
      });
    }

    return resHttp({
      res,
      data,
      message: `Chats recuperados`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};
export const ctrlChat = { registerChat, searchChatsByUser };
