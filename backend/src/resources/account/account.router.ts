import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  getAccountById,
  updateAccountById,
  register,
  deleteAccountById,
} from "./account.controller";
import { authorize } from "../../middleware/authorization";
const accountRouter = Router();

accountRouter.post("/register", register, respond);
accountRouter.get("/getById/:id", getAccountById, respond);
accountRouter.put("/updateById/:id", authorize, updateAccountById, respond);
accountRouter.delete("/deleteById/:id", deleteAccountById, respond);
export default accountRouter;
