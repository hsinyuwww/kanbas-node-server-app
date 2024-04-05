import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import express from "express";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import AssignmentRoutes from "./Assignments/routes.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
  })
);
app.use(express.json());
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
