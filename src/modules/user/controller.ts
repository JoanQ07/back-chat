import { errorHttp, resHttp } from "../../helper";
import { Response, Request } from "express";
import { servicesUser } from "./services";

const createUser = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesUser.createUser(body);

    return resHttp({
      res,
      data,
      message: `Usuario ${body.name}, registrad@ exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};

const authUser = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesUser.authUser(body);

    if(!data) throw "Usuario sin registrar"
    if(data?.password != body.password) throw "Datos no validos"

    return resHttp({
      res,
      data,
      message: `Usuario ${body.name}, logead@ exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};
export const ctrlUser = { createUser, authUser };