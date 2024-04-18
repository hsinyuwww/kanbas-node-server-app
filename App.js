import session from "express-session";
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import SessionRoutes from "./SessionRoutes.js";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import "dotenv/config";

//mongoose.connect("mongodb://localhost:27017/");

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "mongodb://127.0.0.1:27017/kanbas-sp24-thu";
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

Lab5(app);
Hello(app);

app.listen(4000);
