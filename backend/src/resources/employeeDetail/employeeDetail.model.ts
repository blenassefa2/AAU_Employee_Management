import mongoose from "mongoose";

export interface IEmployeeDetailInterface {
  employeeId: mongoose.Schema.Types.ObjectId;
  departmentName: String;
  departmentHead: mongoose.Schema.Types.ObjectId;
  age: number;
  dateOfBirth: String;
  EmoploymentDate: Date;
  EmoploymentStatus: String;
  JobTitle: String;
  Salary: String;
  fatherFullName: String;
  mothersFullName: String;
  fathersPhone: String;
  mothersPhone: String;
  fathersEmail: String;
  mothersEmail: String;
  fathersNationality: String;
  mothersNationality: String;
  emergencyFullName: String;
  emergencyPhone: String;
  emergencyemail: String;
  emergencyNationality: String;
  emergencyTown: String;
  emergencyWereda: String;
  emergencyKebele: String;
  emergencyHouse: String;
  remaningLeaveDays: Number;
}
export const EmployeeDetailSchema: mongoose.Schema<IEmployeeDetailInterface> =
  new mongoose.Schema({
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    departmentName: {
      type: String,
      required: false,
    },
    departmentHead: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    EmoploymentDate: {
      type: Date,
      required: true,
    },
    EmoploymentStatus: {
      type: String,
      required: true,
    },
    JobTitle: {
      type: String,
      required: true,
    },
    Salary: {
      type: String,
      required: true,
    },
    fatherFullName: {
      type: String,
      required: true,
    },
    mothersFullName: {
      type: String,
      required: true,
    },
    fathersPhone: {
      type: String,
      required: true,
    },
    mothersPhone: {
      type: String,
      required: true,
    },
    fathersEmail: {
      type: String,
      required: true,
    },
    mothersEmail: {
      type: String,
      required: true,
    },
    fathersNationality: {
      type: String,
      required: true,
    },
    mothersNationality: {
      type: String,
      required: true,
    },
    emergencyFullName: {
      type: String,
      required: true,
    },
    emergencyPhone: {
      type: String,
      required: true,
    },
    emergencyemail: {
      type: String,
      required: true,
    },
    emergencyNationality: {
      type: String,
      required: true,
    },
    emergencyTown: {
      type: String,
      required: true,
    },
    emergencyWereda: {
      type: String,
      required: true,
    },
    emergencyKebele: {
      type: String,
      required: true,
    },
    emergencyHouse: {
      type: String,
      required: true,
    },
    remaningLeaveDays: {
      type: Number,
      required: true,
    },
  });
export const EmployeeDetail = mongoose.model<IEmployeeDetailInterface>(
  "EmployeeDetail",
  EmployeeDetailSchema
);
