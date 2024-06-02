import express from "express";
import taskController from "../modules/task/controllers";
import asyncMiddleware from "../middlewares/async";

const router = express.Router();

router.get("/tasks", asyncMiddleware(taskController.getTasks));
router.post("/tasks", asyncMiddleware(taskController.createTask));
router.put("/tasks/:id", asyncMiddleware(taskController.updateTask));
router.delete("/tasks/:id", asyncMiddleware(taskController.deleteTask));

export default router;
