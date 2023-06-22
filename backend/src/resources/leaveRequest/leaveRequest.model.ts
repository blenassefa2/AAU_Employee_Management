import mongoose from 'mongoose';

export interface ILeaveRequestInterface {
  employeeId: string;
  reason: string;
  departmentHeadId: string;
  startDate: string;
  endDate: string;
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
      type: String,
      required: false,
    },
    endDate: {
      type: String,
      required: false,
    },

    departmentHeadId: {
      type: String,
      required: true,
    },
  });

export const LeaveRequest = mongoose.model<ILeaveRequestInterface>(
  "LeaveRequest",
  LeaveRequestSchema
);
