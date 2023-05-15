import mongoose from "mongoose";

export interface IAccountInterface {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  password: String;
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
  });
export const Account = mongoose.model<IAccountInterface>(
  "Account",
  AccountSchema
);
