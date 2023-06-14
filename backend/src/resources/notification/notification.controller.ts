import { NextFunction, Request, Response } from "express";
import { Notification } from "./notification.model";
import cloudinary from "./../../config/cloudinary";

export const createNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tag, description, sender, reciever } = req.body;
    const newNotification = await Notification.create({
      tag,
      description,
      sender,
      reciever,
    });
    if (!newNotification) {
      res["locals"].json = {
        statusCode: 500,
        message: "error occured",
      };
      return next();
    }
    res["locals"].json = {
      statusCode: 200,
      data: newNotification,
    };
    return next();
  } catch (error) {
    console.log(error);
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const myNotifications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = res.locals._id;
  try {
    const notifications = await Notification.find({ reciever: id });
    res["locals"].json = {
      statusCode: 200,
      data: notifications,
    };
    return next();
  } catch (error) {
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const updateNotificationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  try {
    res["locals"].json = {
      statusCode: 200,
      message: "data",
    };
    return next();
  } catch (error) {
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const getAllNotifications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notifications = await Notification.find({});
    res["locals"].json = {
      statusCode: 200,
      data: notifications,
    };
    return next();
  } catch (error) {
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const getNotificationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  try {
    const notification = await Notification.findById(_id);
    res["locals"].json = {
      statusCode: 200,
      data: notification,
    };
    return next();
  } catch (error) {
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const deleteNotificationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  try {
    const notification = await Notification.findByIdAndDelete(_id);
    res["locals"].json = {
      statusCode: 200,
      data: "Successfully deleted",
    };
    return next();
  } catch (error) {
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const getNotificationByTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tag = req.params.tag;
    const Notifications = await Notification.find({
      tag: tag,
    });
    res["locals"].json = {
      statusCode: 200,
      message: Notifications,
    };
    return next();
  } catch (error) {
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
