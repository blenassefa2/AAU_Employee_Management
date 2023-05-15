import { NextFunction, Request, Response } from "express";
import { EmployeeDetail } from "./employeeDetail.model";
import cloudinary from "../../config/cloudinary";

export const createEmployeeDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tag, description, sender, reciever } = req.body;
    const newEmployeeDetail = await EmployeeDetail.create({
      tag,
      description,
      sender,
      reciever,
    });
    if (!newEmployeeDetail) {
      res.locals.json = {
        statusCode: 500,
        message: "error occured",
      };
      return next();
    }
    res.locals.json = {
      statusCode: 200,
      data: newEmployeeDetail,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const updateEmployeeDetailById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  try {
    res.locals.json = {
      statusCode: 200,
      message: "data",
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const getAllEmployeeDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notifications = await EmployeeDetail.find({});
    res.locals.json = {
      statusCode: 200,
      data: notifications,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const getEmployeeDetailById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  try {
    const notification = await EmployeeDetail.findById(_id);
    res.locals.json = {
      statusCode: 200,
      data: notification,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const deleteEmployeeDetailById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  try {
    const notification = await EmployeeDetail.findByIdAndDelete(_id);
    res.locals.json = {
      statusCode: 200,
      data: "Successfully deleted",
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const getEmployeeDetailByTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tag = req.params.tag;
    const EmployeeDetails = await EmployeeDetail.find({
      tag: tag,
    });
    res.locals.json = {
      statusCode: 200,
      message: EmployeeDetails,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
