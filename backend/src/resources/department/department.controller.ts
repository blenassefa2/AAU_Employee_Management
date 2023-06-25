import { Request, Response, NextFunction } from "express";
import { department } from "./department.model";

// Create a new department
export const createDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {name, employeeId} = req.body;
    const newDepartment = new department({name:name, employeeId:employeeId});
    await newDepartment.save()
    res.locals.json = {
      statusCode: 200,
      data: newDepartment,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      error: error.message,
    };
    return next();
  }
};

// Get all departments
export const getAllDepartments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const departments = await department.find();
    res.locals.json = {
      statusCode: 200,
      data: departments,
    };
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      error: error.message,
    };
    return next();
  }
};

// Get a specific department by ID
export const getDepartmentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const departmentId = req.params.id;
    const foundDepartment = await department.findById(departmentId);
    if (foundDepartment) {
      res.locals.json = {
        statusCode: 200,
        data: foundDepartment,
      };
    } else {
      res.locals.json = {
        statusCode: 404,
        error: "Department not found",
      };
    }
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      error: error.message,
    };
    return next();
  }
};
export const getDepartmentByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name = req.body.name;
    const foundDepartment = await department.findOne({name:name});
    if (foundDepartment) {
      res.locals.json = {
        statusCode: 200,
        data: foundDepartment,
      };
    } else {
      res.locals.json = {
        statusCode: 404,
        error: "Department not found",
      };
    }
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      error: error.message,
    };
    return next();
  }
};
// Update a department
export const updateDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const departmentId = req.params.id;
    const updatedDepartment = await department.findByIdAndUpdate(
      departmentId,
      req.body,
      { new: true }
    );
    if (updatedDepartment) {
      res.locals.json = {
        statusCode: 200,
        data: updatedDepartment,
      };
    } else {
      res.locals.json = {
        statusCode: 404,
        error: "Department not found",
      };
    }
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      error: error.message,
    };
    return next();
  }
};

// Delete a department
export const deleteDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const departmentId = req.params.id;
    const deletedDepartment = await department.findByIdAndDelete(departmentId);
    if (deletedDepartment) {
      res.locals.json = {
        statusCode: 200,
        data: deletedDepartment,
      };
    } else {
      res.locals.json = {
        statusCode: 404,
        error: "Department not found",
      };
    }
    return next();
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      error: error.message,
    };
    return next();
  }
};
