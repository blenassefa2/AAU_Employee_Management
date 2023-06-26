import { NextFunction, Request, Response } from "express";
import { LeaveRequest } from "./leaveRequest.model";
import cloudinary from "./../../config/cloudinary";
import { Account } from "../account/account.model";
import { EmployeeDetail } from "../employeeDetail/employeeDetail.model";
import { Notification } from "../notification/notification.model";
export const createLeaveRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employeeId = res.locals._id;
    const reason = req.body.reason;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const user = await Account.findById(employeeId);
    const tag = "Leave Request";
    const userdetail = await EmployeeDetail.find({
      employeeId: employeeId,
    });
    const departmentHead = userdetail[0].departmentHead;
    const newNotification = new Notification({
      reciever: userdetail,
      sender: employeeId,
      tag: tag,
      description: reason,
    });
    newNotification.save();
    const newLeaveRequest = await LeaveRequest.create({
      employeeId: employeeId,
      startDate: startDate,
      endDate: endDate,
      reason: reason,
      description: reason,
      departmentHeadId: departmentHead,
    });
    if (!newLeaveRequest) {
      res.locals.json = {
        statusCode: 500,
        message: "error occurred",
      };
      return next();
    }
    res.locals.json = {
      statusCode: 200,
      data: newLeaveRequest,
    };
    return next();
  } catch (error) {
    console.log(error);
    res.locals.json = {
      statusCode: 500,
      message: "error occurred",
    };
    return next();
  }
};

export const getLeaveRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const leaveRequests = await LeaveRequest.find({});
    res.locals.json = {
      statusCode: 200,
      data: leaveRequests,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occurred",
    };
    return next();
  }
};

export const getLeaveRequestById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  try {
    const leaveRequest = await LeaveRequest.findById(_id);
    res.locals.json = {
      statusCode: 200,
      data: leaveRequest,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occurred",
    };
    return next();
  }
};
export const deleteLeaveRequestById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  try {
    const leaveRequest = await LeaveRequest.deleteOne({ _id: _id });
    res.locals.json = {
      statusCode: 200,
      data: leaveRequest,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: "error occurred",
    };
    return next();
  }
};
