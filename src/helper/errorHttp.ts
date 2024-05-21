import { Response } from "express";

export interface IErrorHttp {
  data?: any;
  res: Response;
  status?: number;
  success?: Boolean;
  message?: string;
}

export const errorHttp = ({ res, status = 400, data = null, success = false, message = "" }: IErrorHttp) => {
  console.log("❌  error--> ", message);
  res.status(status).json({ data, success, message });
};
