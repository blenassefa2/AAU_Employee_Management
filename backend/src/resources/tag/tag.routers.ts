import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  addTag,getAllTag, getQuestionsTag
} from "./tag.controller";

const TagRouter = Router();

TagRouter.get("/", getAllTag, respond);

TagRouter.get("/getevaluation", getQuestionsTag, respond);
TagRouter.post("/add", addTag, respond);

export default TagRouter;
