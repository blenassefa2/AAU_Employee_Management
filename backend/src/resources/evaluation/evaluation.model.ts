//const mongoose = require("mongoose");
import mongoose  from "mongoose";

const evaluationSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

export const Evaluation = mongoose.model("Evaluation", evaluationSchema);
