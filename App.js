import session from "express-session";
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import SessionRoutes from "./SessionRoutes.js";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import "dotenv/config";

mongoose.connect("mongodb://localhost:27017/kanbas-sp24-thu");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};

/* if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };

} */
app.use(session(sessionOptions));

app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

Lab5(app);
Hello(app);

app.listen(4000);
