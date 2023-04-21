import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  getNotificationByTag,
  deleteNotificationById,
  updateNotificationById,
} from "./notification.controller";
const notificationRouter = Router();

notificationRouter.put(
  "/updateNotification/:id",
  updateNotificationById,
  respond
);
notificationRouter.get("/allNotifications", getAllNotifications, respond);
notificationRouter.get(
  "/getNotificationById/:id",
  getNotificationById,
  respond
);
notificationRouter.get(
  "/getNotificationByTag/:tag",
  getNotificationByTag,
  respond
);
notificationRouter.delete(
  "/deletNotificationById/:id",
  deleteNotificationById,
  respond
);
notificationRouter.post("/createNotification", createNotification, respond);

export default notificationRouter;
