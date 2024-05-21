import { errorHttp, resHttp } from "../../helper";
import { Response, Request } from "express";
import { notificationService } from "./services";
import mongoose from "mongoose";

const createNotification = async (req: Request, res: Response) => {
  try {
    const { userId, message } = req.body;
    if (!userId || !message) {
      return errorHttp({ res, message: "UserId and message are required" });
    }

    const notification = await notificationService.createNotification(new mongoose.Types.ObjectId(userId), message);

    return resHttp({
      res,
      data: notification,
      message: `Notification created successfully`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error.message });
  }
};

const getNotificationsByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return errorHttp({ res, message: "UserId is required" });
    }

    const notifications = await notificationService.getNotificationsByUser(new mongoose.Types.ObjectId(userId));

    return resHttp({
      res,
      data: notifications,
      message: `Notifications retrieved successfully`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error.message });
  }
};

const markAsRead = async (req: Request, res: Response) => {
  try {
    const { notificationId } = req.params;
    if (!notificationId) {
      return errorHttp({ res, message: "NotificationId is required" });
    }

    await notificationService.markAsRead(new mongoose.Types.ObjectId(notificationId));

    return resHttp({
      res,
      data: null,
      message: `Notification marked as read`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error.message });
  }
};

const deleteNotification = async (req: Request, res: Response) => {
  try {
    const { notificationId } = req.params;
    if (!notificationId) {
      return errorHttp({ res, message: "NotificationId is required" });
    }

    await notificationService.deleteNotification(new mongoose.Types.ObjectId(notificationId));

    return resHttp({
      res,
      data: null,
      message: `Notification deleted successfully`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error.message });
  }
};

export const notificationController = { createNotification, getNotificationsByUser, markAsRead, deleteNotification };