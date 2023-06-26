import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const tag = mongoose.model("tag", tagSchema);
