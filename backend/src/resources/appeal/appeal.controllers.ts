import { Request, Response, NextFunction } from "express";
import { Appeal } from "./appeal.model";
import { EmployeeDetail } from "../employeeDetail/employeeDetail.model";
import { Account } from "../account/account.model";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
export async function getAppealById(req: Request, res: Response) {
  try {
    const appeal = await Appeal.findById(req.params.id);
    res.locals.json = {
      statusCode: 200,
      data: appeal,
    };
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
  }
}

export async function addAppeal(req: Request, res: Response, next: NextFunction) {
    
  try {
    const accountId = req.params.id;

    if (!accountId) {
      // Handle the case when the accountId is missing or empty
      res.locals.json = {
        statusCode: 400,
        data: "Invalid accountId",
      };
      return next();
    }

    const isValidObjectId = mongoose.Types.ObjectId.isValid(accountId);

    if (!isValidObjectId) {
      // Handle the case when the accountId is not a valid ObjectId
      res.locals.json = {
        statusCode: 400,
        data: "Invalid accountId",
      };
      return next();
    }

    const employee = await Account.findById(accountId);
    const employeeDetail = await EmployeeDetail.findOne({
      employeeId: employee._id,
    });

    const departmentHeadId = employeeDetail.departmentHead;
    const appeal = new Appeal({
      description: req.body.description,
      employeeId: employee._id,
      departmentHeadId: departmentHeadId,
    });

    const savedAppeal = await appeal.save();
    res.locals.json = {
      statusCode: 200,
      data: savedAppeal,
    };
    return next()
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next();
  }
}

export async function updateAppealById(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body;
    
    const done = await Appeal.updateOne({ _id: req.params.id }, { $set: data });
    res.locals.json = {
      statusCode: 200,
      data: done,
    };
    return next()
  } catch (err) {
    
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next()
  }
}

export async function deleteById(req: Request, res: Response, next: NextFunction) {
  try {
    const appeal = await Appeal.deleteOne({
      _id: req.params.id,
    });
    res.locals.json = {
      statusCode: 200,
      data: appeal,
    };
    return next()
  } catch (err) {
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next()
  }
}

export async function getAllAppeal(req: Request, res: Response, next: NextFunction) {
  try {
    const appeal = await Appeal.find();
    res.locals.json = {
      statusCode: 200,
      data: appeal,
    };
    return next();
  } catch (err) {
    res.locals.json = {
      statusCode: 404,
      data: "Error fetching appeal",
    };
    return next();
  }
}
