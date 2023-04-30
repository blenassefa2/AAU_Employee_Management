import mongoose, { ObjectId } from "mongoose";
import { IAccountInterface, Account } from "../account/account.model";
export interface INotificationInterface {
  tag: String;
  description: String;
  sender: mongoose.Schema.Types.ObjectId;
  reciever: mongoose.Schema.Types.ObjectId;
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
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  });
export const Notification = mongoose.model<INotificationInterface>(
  "Notification",
  NotificationSchema
);
