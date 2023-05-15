import { NextFunction, Request, Response } from "express";
import { LeaveRequest } from './leaveRequest.model';
import cloudinary from "./../../config/cloudinary";

export const createLeaveRequest = async (
    req: Request, 
    res: Response,
    next: NextFunction
    ) => {
//   try {
//     const leaveRequest = await LeaveRequest.create(req.body);
//     res.status(201).json({ leaveRequest });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
    try {
        const { requestId, employeeId, reason, attachment, departmentHeadId } = req.body;
        const newLeaveRequest = await LeaveRequest.create({
            requestId,
            employeeId,
            reason,
            attachment,
            response: '',
            departmentHeadId,
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
    next: NextFunction) => {
//   try {
//     const leaveRequests = await LeaveRequest.find();
//     res.json({ leaveRequests });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

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
//   try {
//     const leaveRequest = await LeaveRequest.findById(req.params.id);
//     if (!leaveRequest) {
//       res.status(404).json({ error: 'Leave request not found' });
//     } else {
//       res.json({ leaveRequest });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
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
