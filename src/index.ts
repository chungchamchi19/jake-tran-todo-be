import express from "express";
import http from "http";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./database/connectDB";
import cookieParser from "cookie-parser";
import { loadEnvConfig } from "./configs/env";

declare global {
  namespace NodeJS {
    interface Global {
      io: any;
    }
  }
}

loadEnvConfig();
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const server = http.createServer(app);

/* routes */
routes(app).then(() => {
  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`⚡️[]: Server is running at http://localhost:${PORT}`);
  });
});

export default server;
