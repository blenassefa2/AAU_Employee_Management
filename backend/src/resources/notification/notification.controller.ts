import e, { NextFunction, Request, Response } from "express";
import { Notification } from "./notification.model";
import cloudinary from "./../../config/cloudinary";
import { toInteger } from "lodash";
import { Account } from "../account/account.model";
import { ObjectId } from "mongodb";
export const createNotificationEvaluation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const employees = await Account.find({})
    employees.forEach((employee) => {
    // Customize the notification details for each employee
    const tag = 'Evaluation';
    const description = `Dear ${employee.firstName}, You need to fill the evaluation form for you and your peers.`;
    const senderId = new ObjectId("647c9b8b18398bdc020ee99b");; // Replace with the appropriate sender ID
    if (employee._id != senderId){
    // Create a new notification instance
    const notification = new Notification({
      tag: tag,
      description: description,
      senderId: senderId,
      recieverId: employee._id,
      // Add any additional properties or metadata as needed
    });
    notification.save()}
  })

}
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
export const getNotificationByReciver = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  let limit = toInteger(req.query.limit) || 10;
  let skip = toInteger(req.query.skip) || 1;
  try {
    const notifications = await Notification.find({
      reciever: _id,
    })
      .skip((skip - 1) * limit)
      .limit(limit);

    console.log("Notifications:", notifications);
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
