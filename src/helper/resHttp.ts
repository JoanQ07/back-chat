import { IErrorHttp } from "./errorHttp";

interface resHttps extends IErrorHttp {}

export const resHttp = ({
  res,
  status = 200,
  data,
  success = true,
  message = "Proceso exitoso!",
}: resHttps) => {
  res.status(status).json({ data, success, message });
};

export const resHttpIO = ({ data, success = true, message = "Proceso exitoso!" }: any) => {
  return { data, success, message };
};
