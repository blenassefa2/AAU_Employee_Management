import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  createLeaveRequest,
  getLeaveRequests,
  getLeaveRequestById,
} from './leaveRequest.controller';

const leaveRequestRouter = Router();

leaveRequestRouter.post('/leave-requests', createLeaveRequest);
leaveRequestRouter.get('/leave-requests', getLeaveRequests);
leaveRequestRouter.get('/leave-requests/:id', getLeaveRequestById);

export default leaveRequestRouter;

