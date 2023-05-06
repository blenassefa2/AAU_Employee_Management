import mongoose from "mongoose";

export interface reportInterface {
reportid:string;
statisticianid:string;
description:string;
title:string;
departmentHeadId:string;
reports;
 
}
export const HRSchema: mongoose.Schema<reportInterface> =
  new mongoose.Schema({
    reportid: {
      type: String,
      required: true,
    },
    statisticianid: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    reports: {
      month: String,
      reportFile: Buffer,
    },
    departmentHeadId: {
      type: String,
      required: true,
    },
  });
export const Account = mongoose.model<reportInterface>(
  "report",
HRSchema
);
module.exports = mongoose.model('HR', HRSchema);
