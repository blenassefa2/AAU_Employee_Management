import mongoose from "mongoose";

export interface reportInterface {
  reportid: string;
  statisticianid: string;
  description: string;
  title: string;
  departmentHeadId: string;
  reports;
}
export const ReportSchema: mongoose.Schema<reportInterface> =
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
export const Report = mongoose.model<reportInterface>("report", ReportSchema);
