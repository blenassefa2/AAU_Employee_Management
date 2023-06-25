import { NextFunction, Request, Response } from "express";
import { EmployeeDetail, IEmployeeDetailInterface } from "./employeeDetail.model";
import cloudinary from "../../config/cloudinary";
import XLSX from "xlsx";
import { department } from "../department/department.model";
export const creatMany = async(req: Request,
  res: Response,
  next: NextFunction) => {

  try {
  const filePath = req.file.path;
    console.log(filePath)
  // Read the uploaded file
  const workbook = XLSX.readFile(filePath);

  // Get the sheet you want to extract the employee data from (assuming it's the first sheet in this example)
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  // Convert the sheet data to a JSON object
  const employees = XLSX.utils.sheet_to_json(worksheet);

  // Process the employee data and save to the database
  for (const employeeData of employees) {
    
    console.log(employeeData)
    const employee = employeeData as IEmployeeDetailInterface;
    const startDate: Date = new Date(employee.EmoploymentDate);

    const currentDate: Date = new Date();

    // Calculate the total number of days between start date and current date
    const totalDays = Math.ceil(
      (+currentDate - +startDate) / (1000 * 60 * 60 * 24)
    );

    // Calculate the number of years between start date and current date
    const years = Math.floor(totalDays / 365);
    const departmentName =  employee.departmentName;
    const foundDepartment = await department.findOne({ name: departmentName });
    const departmentHead = await foundDepartment._id
    // Calculate the total leave days considering annual entitlement of 21 days per year
    const totalLeaveDays = years * 21;
    const newEmployee = new EmployeeDetail({
      employeeId: employee.employeeId,
      departmentName: employee.departmentName,
      departmentHead: departmentHead,
      age: employee.age,
      dateOfBirth: employee.dateOfBirth,
      EmoploymentDate: employee.EmoploymentDate,
      EmoploymentStatus: employee.EmoploymentStatus,
      JobTitle: employee.JobTitle,
      Salary: employee.Salary,
      fatherFullName: employee.fatherFullName,
      mothersFullName: employee.mothersFullName,
      fathersPhone: employee.fathersPhone,
      mothersPhone: employee.mothersPhone,
      fathersEmail: employee.fathersEmail,
      mothersEmail: employee.mothersEmail,
      fathersNationality: employee.fathersNationality,
      mothersNationality: employee.mothersNationality,
      emergencyFullName: employee.emergencyFullName,
      emergencyPhone: employee.emergencyPhone,
      emergencyemail: employee.emergencyemail,
      emergencyNationality: employee.emergencyNationality,
      emergencyTown: employee.emergencyTown,
      emergencyWereda: employee.emergencyWereda,
      emergencyKebele: employee.emergencyKebele,
      emergencyHouse: employee.emergencyHouse,
      remaningLeaveDays: totalLeaveDays,
    });

    await newEmployee.save();
    // console.log("Created employee:", newEmployee);
  }

  res.locals.json = {
    statusCode: 200,
    message: "File uploaded and employees created successfully.",
  };
  return next();

} catch(err) {
  console.log(err)
  res.locals.json = {
    statusCode: 500,
    error: "An error occurred while processing the file.",
  };
  return next();
}
  }
export const createEmployeeDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { employeeId,
  departmentName, 
  
  age,
  dateOfBirth,
  EmoploymentDate,
  EmoploymentStatus,
  JobTitle,
  Salary,
  fatherFullName,
  mothersFullName,
  fathersPhone,
  mothersPhone,
  fathersEmail,
  mothersEmail,
  fathersNationality,
  mothersNationality,
  emergencyFullName,
  emergencyPhone,
  emergencyemail,
  emergencyNationality,
  emergencyTown,
  emergencyWereda,
  emergencyKebele,
  emergencyHouse } = req.body;
  const startDate: Date = new Date(EmoploymentDate);

  const currentDate: Date = new Date();

  // Calculate the total number of days between start date and current date
  const totalDays = Math.ceil(
    (+currentDate - +startDate) / (1000 * 60 * 60 * 24)
  );

  // Calculate the number of years between start date and current date
  const years = Math.floor(totalDays / 365);
  const name = req.body.name;
    const foundDepartment = await department.findOne({name:departmentName});
const departmentHead = foundDepartment._id
  // Calculate the total leave days considering annual entitlement of 21 days per year
  const totalLeaveDays = years * 21;
  console.log(departmentHead, req.body)
    const newEmployeeDetail = await EmployeeDetail.create({
      employeeId,
      departmentName,
      departmentHead,
      age,
      dateOfBirth,
      EmoploymentDate,
      EmoploymentStatus,
      JobTitle,
      Salary,
      fatherFullName,
      mothersFullName,
      fathersPhone,
      mothersPhone,
      fathersEmail,
      mothersEmail,
      fathersNationality,
      mothersNationality,
      emergencyFullName,
      emergencyPhone,
      emergencyemail,
      emergencyNationality,
      emergencyTown,
      emergencyWereda,
      emergencyKebele,
      emergencyHouse,
      remaningLeaveDays: totalLeaveDays,
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
    console.log(error)
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
  try{
  const data = req.body;
    const done = await EmployeeDetail.updateOne(
      { _id: res.locals._id },
      { $set: data }
    );
    res.locals.json = {
      statusCode: 200,
      data: done,
    };
    return next();
  } catch (err) {
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next(err);
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
export const getEmployeeForDepartmenrHead = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = res.locals._id;
  try {
    const employee = await EmployeeDetail.find({departmentHead: _id});
    res.locals.json = {
      statusCode: 200,
      data: employee,
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
export const getEmployeeDetailById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = res.locals._id;
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
  const _id = res.locals._id;
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
export const getEmployeeDetailByEmployeeId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals._id;
    //const id = req.params.id
    const EmployeeDetails = await EmployeeDetail.find({
      employeeId: id,
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
