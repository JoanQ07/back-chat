import { notificationController }  from "./controller";
import { Router } from "express";

const router = Router();

router.get("/create-notification", notificationController.createNotification);
router.post("/get-notifications-by-user", notificationController.getNotificationsByUser);
router.post("/mark-as-read", notificationController.markAsRead);
router.post("/delete-notification", notificationController.deleteNotification);

export default router;