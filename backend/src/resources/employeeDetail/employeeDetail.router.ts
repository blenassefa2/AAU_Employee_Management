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
import { authorize } from "../../middleware/authorization";
const employeeDetailRouter = Router();

employeeDetailRouter.put(
  "/updateEmployeeDetail/:id",
  updateEmployeeDetailById,
  respond
);
employeeDetailRouter.get("/allEmployeeDetails", getAllEmployeeDetails, respond);
employeeDetailRouter.get(
  "/getEmployeeDetailById/",authorize,
  getEmployeeDetailById,
  respond
);
employeeDetailRouter.get(
  "/getEmployeeDetailByEmployeeId/",authorize,
  getEmployeeDetailByEmployeeId,
  respond
);
employeeDetailRouter.delete(
  "/deletEmployeeDetailById/",authorize,
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
