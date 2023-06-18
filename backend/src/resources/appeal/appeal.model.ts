import mongoose from "mongoose";

export interface IAppealInterface {
  description: string;
  employeeId: mongoose.Types.ObjectId;
  departmentHeadId: mongoose.Types.ObjectId;
}

const appealSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  departmentHeadId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export const Appeal = mongoose.model<IAppealInterface>(
  "Appeal",
  appealSchema
);
