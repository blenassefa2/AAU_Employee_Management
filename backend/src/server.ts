import express from "express";
import bodyParser from "body-parser";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import { connect } from "./utils/db/setupDB";

// import all routers
import accountRouter from "./resources/account/account.router";
import notificationRouter from "./resources/notification/notification.router";
import authRouter from "./utils/auth/authRouter";
import corsOptions from "./corsOptions";
import appealRouter from "./resources/appeal/appeal.router";
import EvaluationRouter from "./resources/evaluation/evaluation.router";
import leaveRequestRouter from "./resources/leaveRequest/leaveRequest.router";
import employeeDetailRouter from "./resources/employeeDetail/employeeDetail.router";

export const app = express();

// configuration
app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:19006");
  // Add other necessary CORS headers here if needed
  next();
});
app.use(cors(corsOptions));
app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));

// Lists of routers
app.use("/api/v1/account", accountRouter);
app.use("/api/v1/notification", notificationRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/appeal", appealRouter)
app.use("/api/v1/evaluation", EvaluationRouter);
app.use("/api/v1/leave", leaveRequestRouter);
app.use("/api/v1/employeeDetails", employeeDetailRouter);
app.use((req, res) => {
  res.json({ data: "Hello World!" });
});

// Start of server
export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(config.host);
      console.log(`REST API on http://${config.host}:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
