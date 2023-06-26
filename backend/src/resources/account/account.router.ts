import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  getAccountById,
  updateAccountById,
  register,
  deleteAccountById,
  getallaccounts,
  registerMany,
  forgetPassword,
  getAccount,
  aprove,
  rejectNotification,
  resetPassword,
  changePassword,
  search,
  convertToExcel,
} from "./account.controller";
import { authorize } from "../../middleware/authorization";
import { upload } from "../../middleware/multer";

const accountRouter = Router();

accountRouter.post("/register", upload.single("photo"), register, respond);
accountRouter.post(
  "/registerMany",
  upload.single("file"),
  registerMany,
  respond
);
accountRouter.post("/forgotPassword/:id", forgetPassword, respond);
accountRouter.post("/approve/:id", aprove, respond);
accountRouter.post("/reset/:id", resetPassword, respond);
accountRouter.post("/changePassword", changePassword, respond);
accountRouter.post("/reject/:id", rejectNotification, respond);
accountRouter.get("/getById", authorize, getAccountById, respond);
accountRouter.get("/getAllAccounts", authorize, getallaccounts, respond);
accountRouter.get("/", search, respond);
accountRouter.get("/download", convertToExcel, respond);
accountRouter.get("/search", getAccount, respond);
accountRouter.put("/updateById/:id", authorize, updateAccountById, respond);
accountRouter.delete("/deleteById/:id", deleteAccountById, respond);
export default accountRouter;
