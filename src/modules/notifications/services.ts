import dataContext from '../../helper/dataContext';
import { INotification } from './model';
import mongoose from 'mongoose';

const createNotification = async (userId: mongoose.Types.ObjectId, message: string): Promise<INotification> => {
  try {
    const notification = await dataContext.notification.create({ user: userId, message, read: false });
    return notification;
  } catch (error) {
    throw error;
  }
};

const getNotificationsByUser = async (userId: mongoose.Types.ObjectId): Promise<INotification[]> => {
  try {
    const notifications = await dataContext.notification.find({ user: userId });
    return notifications;
  } catch (error) {
    throw error;
  }
};

const markAsRead = async (notificationId: mongoose.Types.ObjectId): Promise<void> => {
  try {
    await dataContext.notification.findByIdAndUpdate(notificationId, { read: true });
  } catch (error) {
    throw error;
  }
};

const deleteNotification = async (notificationId: mongoose.Types.ObjectId): Promise<void> => {
  try {
    await dataContext.notification.findByIdAndDelete(notificationId);
  } catch (error) {
    throw error;
  }
};

export const notificationService = { createNotification, getNotificationsByUser, markAsRead, deleteNotification };