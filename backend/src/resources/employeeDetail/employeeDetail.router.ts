import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  createEmployeeDetail,
  getAllEmployeeDetails,
  getEmployeeDetailById,
  getEmployeeDetailByTag,
  deleteEmployeeDetailById,
  updateEmployeeDetailById,
} from "./employeeDetail.controller";
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
  "/getEmployeeDetailByTag/:tag",
  getEmployeeDetailByTag,
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

export default employeeDetailRouter;
