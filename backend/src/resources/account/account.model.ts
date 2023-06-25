import mongoose from "mongoose";

export interface IAccountInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userName: string;
  password: string;
  role: string;
  woreda: string;
  maritaStatus: string;
  town: string;
  houeseNo: string;
  kebele: string;
  photo: string;
  
}

export const AccountSchema: mongoose.Schema<IAccountInterface> = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Employee", "Statistician", "Hrmanager"],
    required: true,
  },
  woreda: {
    type: String,
    required: false,
  },
  maritaStatus: {
    type: String,
    required: false,
  },
  town: {
    type: String,
    required: false,
  },
  houeseNo: {
    type: String,
    required: false,
  },
  kebele: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },

});

export const Account = mongoose.model<IAccountInterface>(
  "Account",
  AccountSchema
);
