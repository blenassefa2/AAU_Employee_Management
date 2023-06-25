import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  getAccountById,
  updateAccountById,
  register,
  deleteAccountById,
  getallaccounts,
} from "./account.controller";
import { authorize } from "../../middleware/authorization";
const accountRouter = Router();

accountRouter.post("/register", register, respond);
accountRouter.get("/getById", authorize, getAccountById, respond);
accountRouter.get("/getAllAccounts", authorize, getallaccounts, respond);
accountRouter.put("/updateById/:id", authorize, updateAccountById, respond);
accountRouter.delete("/deleteById/:id", deleteAccountById, respond);
export default accountRouter;
