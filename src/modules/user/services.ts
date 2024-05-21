import dataContext from "../../helper/dataContext";
import { IUser } from "./model";

const createUser = async (data: IUser) => {
  try {
    const newUser = await dataContext.user.create(data);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const authUser = async (data: IUser) => {
  try {
    const user = await dataContext.user.findOne({ name: data.name });
    
    return user?.toObject();
  } catch (error) {
    throw error;
  }
};
export const servicesUser = { createUser, authUser };
