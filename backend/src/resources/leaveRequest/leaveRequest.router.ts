import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  createLeaveRequest,
  getLeaveRequests,
  getLeaveRequestById,
  deleteLeaveRequestById,
} from "./leaveRequest.controller";

const leaveRequestRouter = Router();

leaveRequestRouter.post('/leave-requests/:id', createLeaveRequest, respond);
leaveRequestRouter.get('/leave-requests', getLeaveRequests,respond);
leaveRequestRouter.get('/leave-requests/:id', getLeaveRequestById);
leaveRequestRouter.delete('/leave-requests/:id', deleteLeaveRequestById)
export default leaveRequestRouter;

