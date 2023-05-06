import { Router } from "express";
import { respond } from "../../middleware/respond";
import { register } from "./account.controller";
const accountRouter = Router();

accountRouter.post("/register", register, respond);
// accountRouter.get("/register", register, respond);
// accountRouter.put("/register", register, respond);
// accountRouter.delete("/register", register, respond);
export default accountRouter;
