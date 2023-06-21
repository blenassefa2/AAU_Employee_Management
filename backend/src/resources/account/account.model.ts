import mongoose from "mongoose";

export interface IAccountInterface {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  password: String;
  photoUrl: string;
  role: String;
}
export const AccountSchema: mongoose.Schema<IAccountInterface> =
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    photoUrl: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Employee", "Statistician", "Hrexpert"],
      required: true,
    },
  });
export const Account = mongoose.model<IAccountInterface>(
  "Account",
  AccountSchema
);
