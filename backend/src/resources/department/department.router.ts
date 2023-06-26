import { Router } from "express";
import { respond } from "../../middleware/respond";
import { createDepartment, deleteDepartment, getAllDepartments, getDepartmentById, getDepartmentByName, updateDepartment } from "./department.controller"
import { authorize } from "../../middleware/authorization";

const departmentRouter = Router();

departmentRouter.post("/creat/", createDepartment, respond);
departmentRouter.get("/getdepartmentByName/", getDepartmentByName, respond);
departmentRouter.get("/getall", getAllDepartments, respond);
departmentRouter.get("/getdepartmentById/", getDepartmentById,respond);
departmentRouter.delete("/delete/", deleteDepartment,respond);
departmentRouter.put("/update/", updateDepartment,respond);

export default departmentRouter;
