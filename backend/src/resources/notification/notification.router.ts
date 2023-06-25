import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  getNotificationByTag,
  deleteNotificationById,
  updateNotificationById,
  myNotifications,
  getNotificationByReciver,
} from "./notification.controller";
import { authorize } from "../../middleware/authorization";
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
  "/getNotificationByReciver/:id",
  getNotificationByReciver,
  respond
);
notificationRouter.get("/myNotifications", authorize, myNotifications, respond);
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
