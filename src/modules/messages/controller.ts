import { errorHttp, resHttp } from "../../helper";
import { servicesMessage } from "./services";
import { Response, Request } from "express";

const registerChat = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesMessage.registerMessage(body);

    return resHttp({
      res,
      data,
      message: `Mensaje registrado exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};

const deleteAll = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesMessage.deleteAll();

    return resHttp({
      res,
      data,
      message: `Mensaje registrado exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};

const searchMessagesByChat = async ({ query }: Request, res: Response) => {
  try {
    const data = await servicesMessage.searchMessagesByChat(query.idChat?.toString());

    if (data.length < 1) {
      return resHttp({
        res,
        data,
        message: `Sin mensajes registrados`,
      });
    }

    return resHttp({
      res,
      data,
      message: `Mensaje registrado exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};
export const ctrlMessage = { registerChat, searchMessagesByChat, deleteAll };
