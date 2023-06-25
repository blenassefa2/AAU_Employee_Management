import express, { response } from "express";
import { createResult, getResultById } from "./results.controller";
import { authorize } from "../../middleware/authorization";
import { respond } from "../../middleware/respond";

const Resultrouter = express.Router();

// Route to create a new result
Resultrouter.post("/creatResults", createResult,respond);

// Route to get a result by its ID
Resultrouter.get("/resultsById",authorize, getResultById,respond);

export default Resultrouter;
