import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeId: {
    type: mongoose.Types.ObjectId,
  },
});

export const department = mongoose.model("department", departmentSchema);
