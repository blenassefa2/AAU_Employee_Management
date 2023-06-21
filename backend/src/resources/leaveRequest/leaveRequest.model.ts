import mongoose from 'mongoose';

export interface ILeaveRequestInterface {
  requestId: string;
  employeeId: string;
  reason: string;
  attachment: string;
  response: string;
  departmentHeadId: string;
}

export const LeaveRequestSchema: mongoose.Schema<ILeaveRequestInterface> =
  new mongoose.Schema({

    employeeId: {
        type: String,
        required: true
    },

    reason: {
        type: String,
        required: true
    },

    attachment: {
        type: String,
        required: true
    },

    response: {
        type: String,
        required: false
    },

    departmentHeadId: {
        type: String,
        required: true
    }

});

export const LeaveRequest = mongoose.model<ILeaveRequestInterface>(
  "LeaveRequest",
  LeaveRequestSchema
);
