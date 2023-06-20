import mongoose from "mongoose";

export interface IEmployeeDetailInterface {
  employeeId: mongoose.Schema.Types.ObjectId;
  dependantsInfo: mongoose.Schema.Types.ObjectId;
  educationInfo: mongoose.Schema.Types.ObjectId;
  trainingInfo: mongoose.Schema.Types.ObjectId;
  familyInfo: mongoose.Schema.Types.ObjectId;
  achievementsInfo: mongoose.Schema.Types.ObjectId;
  workExperience: mongoose.Schema.Types.ObjectId;
  departmentName: String;
  departmentHead: mongoose.Schema.Types.ObjectId;
  age: number;
  dateOfBirth: Date;
  religion: String;
  martialStatus: boolean;
  house:String;
  EmoploymentDate:Date;
  EmoploymentStatus: String;
  JobTitle: String;
  Salary: String;
  Photo: String;

}
export const EmployeeDetailSchema: mongoose.Schema<IEmployeeDetailInterface> =
  new mongoose.Schema({
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    dependantsInfo: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    educationInfo: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    trainingInfo: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    martialStatus: {
      type: Boolean,
      required: false,
    },
    religion: {
      type: String,
      required: false,
    },
    familyInfo: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    workExperience: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    achievementsInfo: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    
  });
export const EmployeeDetail = mongoose.model<IEmployeeDetailInterface>(
  "EmployeeDetail",
  EmployeeDetailSchema
);
