import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import express from "express";
import cors from "cors";
import ModuleRoutes from "./Modules/routes.js";
import CourseRoutes from "./Courses/routes.js";
import AssignmentRoutes from "./Assignments/routes.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: [
      process.env.FRONTEND_URL,
      "https://celadon-stroopwafel-da3bf1.netlify.app",
    ],
  })
);
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);
