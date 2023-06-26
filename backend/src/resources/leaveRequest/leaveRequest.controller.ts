import { NextFunction, Request, Response } from "express";
import { LeaveRequest } from './leaveRequest.model';
import cloudinary from "./../../config/cloudinary";
import { Account } from "../account/account.model";
import { EmployeeDetail, IEmployeeDetailInterface } from "../employeeDetail/employeeDetail.model";
import { Notification } from "../notification/notification.model";
export const createLeaveRequest = async (
    req: Request, 
    res: Response,
    next: NextFunction
    ) => {
    try {
        //const employeeId = res.locals._id;
       const employeeId = req.body.id;
        const reason   = req.body.reason;
        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        const user = await Account.findById(employeeId);
        const tag = "Leave Request" 
        const userdetail = await EmployeeDetail.find({
          employeeId: employeeId,
        });

        const departmentHead = userdetail[0].departmentHead; 
        const daysLeft = userdetail[0].remaningLeaveDays;
        const requestedDate: Number = Math.ceil(
          (+endDate - +startDate) / (1000 * 60 * 60 * 24)
        );
        if (daysLeft < requestedDate) {
           res.locals.json = {
             statusCode: 500,
             message: "Can't request a leave you have " + daysLeft + " days left",
           };
           return next();
        }
        const newNotification = new Notification({
          reciever: departmentHead,
          sender: user,
          tag: tag,
          description: reason,
        });
        newNotification.save()
        const newLeaveRequest = await LeaveRequest.create({
          employeeId: employeeId,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
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
            data: [newLeaveRequest, newNotification]
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

export const grant = async(req: Request, 
    res: Response,
    next: NextFunction) => {
try{
      const departmentHeadIdId = res.locals.id;
      //const departmentHeadIdId = req.body.head;
      const employeeId = req.body.id; 
      console.log(employeeId,departmentHeadIdId)
      const request = await LeaveRequest.find({employeeId})
      const user = await EmployeeDetail.find({employeeId}) ;
      console.log(user,request)
      const daysLeft = user[0].remaningLeaveDays
      const endDate = request[0].endDate;
      const startDate =  request[0].startDate
      const requestedDate:Number = Math.ceil(
      (+endDate - +startDate) / (1000 * 60 * 60 * 24)
    );
      const left = +daysLeft - +requestedDate;
      user[0].remaningLeaveDays = left;
        await user[0].save();
const newNotification = new Notification({
  reciever: employeeId,
  sender: departmentHeadIdId,
  tag: "Leave-Request",
  description: "Your leave have been approved",
});
newNotification.save();
res.locals.json = {
  statusCode: 500,
  data: newNotification,
};
return next();
 } catch (error) {
  console.log(error)
    res.locals.json = {
        statusCode: 500,
        message: "error occurred",
    };
    return next();
  }
    }
export const getLeaveRequests = async (
    req: Request, 
    res: Response,
    next: NextFunction) => {


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
    next: NextFunction) => {

const _id = res.locals._id;
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
  const _id = res.locals._id;
  try {
    const leaveRequest = await LeaveRequest.deleteOne({_id:_id});
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
