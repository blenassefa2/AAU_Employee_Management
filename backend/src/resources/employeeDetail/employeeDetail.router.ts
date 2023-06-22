import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  createEmployeeDetail,
  getAllEmployeeDetails,
  getEmployeeDetailById,
  getEmployeeDetailByEmployeeId,
  deleteEmployeeDetailById,
  updateEmployeeDetailById,
  creatMany,
} from "./employeeDetail.controller";
import { upload } from "../../middleware/multer";
const employeeDetailRouter = Router();

employeeDetailRouter.put(
  "/updateEmployeeDetail/:id",
  updateEmployeeDetailById,
  respond
);
employeeDetailRouter.get("/allEmployeeDetails", getAllEmployeeDetails, respond);
employeeDetailRouter.get(
  "/getEmployeeDetailById/:id",
  getEmployeeDetailById,
  respond
);
employeeDetailRouter.get(
  "/getEmployeeDetailByEmployeeId/:id",
  getEmployeeDetailByEmployeeId,
  respond
);
employeeDetailRouter.delete(
  "/deletEmployeeDetailById/:id",
  deleteEmployeeDetailById,
  respond
);
employeeDetailRouter.post(
  "/createEmployeeDetail",
  createEmployeeDetail,
  respond
);
employeeDetailRouter.post(
  "/createMany",
  upload.single("file"),
  creatMany,
  respond
);

export default employeeDetailRouter;
