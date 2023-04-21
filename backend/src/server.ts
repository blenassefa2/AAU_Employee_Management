import express from "express";
import bodyParser from "body-parser";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import { connect } from "./utils/db/setupDB";

export const app = express();

// configuration
app.disable("x-powered-by");
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));

// Lists of routers

app.use((req, res) => {
  res.json({ data: "Hello World!" });
});

// Start of server
export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://${config.host}:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
