import mongoose from "mongoose";
import { IAccountInterface, Account } from "../account/account.model";
export interface INotificationInterface {
  tag: String;
  description: String;
  sender: IAccountInterface;
  reciever: IAccountInterface;
}
export const NotificationSchema: mongoose.Schema<INotificationInterface> =
  new mongoose.Schema({
    tag: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sender: {
      type: Account,
      required: false,
    },
    reciever: {
      type: Account,
      required: true,
    },
  });
export const Notification = mongoose.model<INotificationInterface>(
  "Notification",
  NotificationSchema
);
