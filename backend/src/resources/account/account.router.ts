import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  getAccountById,
  updateAccountById,
  register,
  deleteAccountById,
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
import {upload} from "../../middleware/multer";

const accountRouter = Router();

accountRouter.post("/register", upload.single("photo"), register, respond);
accountRouter.post("/registerMany",upload.single("file"), registerMany, respond);
accountRouter.post("/forgotPassword/", authorize, forgetPassword, respond);
accountRouter.post("/approve/",authorize, aprove, respond);
accountRouter.post("/reset/", authorize, resetPassword, respond);
accountRouter.post("/changePassword/",authorize ,changePassword, respond);
accountRouter.post("/reject/", authorize, rejectNotification, respond);
accountRouter.get("/getById", authorize, getAccountById, respond);
accountRouter.get("/",  search, respond);
accountRouter.get("/download", convertToExcel, respond);
accountRouter.get("/search", getAccount, respond);
accountRouter.put("/updateById/", authorize, updateAccountById, respond);
accountRouter.delete("/deleteById/", authorize, deleteAccountById, respond);
export default accountRouter;
