import { Router } from "express";
import { respond } from "../../middleware/respond";
import { register } from "./account.controller";
const accountRouter = Router();

accountRouter.post("/createNotification", register, respond);

export default accountRouter;
