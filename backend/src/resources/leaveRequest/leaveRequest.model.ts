import mongoose from 'mongoose';

export interface ILeaveRequestInterface {
  employeeId: string;
  reason: string;
  startDate: Date;
  endDate: Date;
}

export const LeaveRequestSchema: mongoose.Schema<ILeaveRequestInterface> =
  new mongoose.Schema({
    employeeId: {
      type: String,
      required: true,
    },

    reason: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },

   
  });

export const LeaveRequest = mongoose.model<ILeaveRequestInterface>(
  "LeaveRequest",
  LeaveRequestSchema
);
