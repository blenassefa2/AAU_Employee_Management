import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  createLeaveRequest,
  getLeaveRequests,
  getLeaveRequestById,
  deleteLeaveRequestById,
  grant,
} from "./leaveRequest.controller";
import { authorize } from "../../middleware/authorization";

const leaveRequestRouter = Router();

leaveRequestRouter.post('/creat/', authorize,createLeaveRequest, respond);
leaveRequestRouter.post(
  "/leave-requests/",
  authorize,
  grant,
  respond
);
leaveRequestRouter.get('/getallrequest', getLeaveRequests,respond);
leaveRequestRouter.get('/getrequesById/',authorize, getLeaveRequestById);
leaveRequestRouter.delete('/delete/',authorize, deleteLeaveRequestById)
export default leaveRequestRouter;

