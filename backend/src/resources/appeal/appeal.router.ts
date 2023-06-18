import { Router } from "express";
import { respond } from "../../middleware/respond";
import { getAllAppeal, addAppeal, updateAppealById, deleteById } from "./appeal.controllers";

const appealRouter = Router();

appealRouter.get("/", getAllAppeal, respond);
appealRouter.post("/addAppeal/:id", addAppeal, respond);
appealRouter.put("/updateById/:id", updateAppealById, respond);
appealRouter.delete("/deleteById/:id", deleteById, respond);

export default appealRouter;
