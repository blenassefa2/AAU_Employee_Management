import mongoose, { ObjectId } from "mongoose";

export interface IResultInterface {
  result: Number;
  tag: mongoose.Types.ObjectId;
  employeeId: mongoose.Types.ObjectId;
}
export const ResultSchema: mongoose.Schema<IResultInterface> =
  new mongoose.Schema({
    result: {
      type: Number,
      required: true,
    },
    tag: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  });
export const Result = mongoose.model<IResultInterface>(
  "Result",
  ResultSchema
);
