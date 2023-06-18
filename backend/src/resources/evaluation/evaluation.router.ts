import { Router } from "express";
import { respond } from "../../middleware/respond";
import { addEvaluation, deleteById, getAllEvaluation, updateById } from "./evaluation.controller";


const EvaluationRouter = Router();

EvaluationRouter.get("/", getAllEvaluation, respond);
EvaluationRouter.post("/add", addEvaluation, respond);
EvaluationRouter.put("/updateById/:id", updateById, respond);
EvaluationRouter.delete("/deleteById/:id", deleteById, respond);

export default EvaluationRouter;
