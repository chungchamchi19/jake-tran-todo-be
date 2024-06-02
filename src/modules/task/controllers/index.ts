import { listStatus, Task } from "../../../entities/task";
import codes from "../../../errors/codes";
import CustomError from "../../../errors/customError";
import { SORTBY } from "../../../types/type.filter";
import taskServices from "../services/task";
import { Request, Response } from "express";

const getTasks = async (req: Request, res: Response) => {
  const { pageSize, orderBy } = req.query;
  const tasks = await taskServices.getTasks({
    pageSize: Number(pageSize),
    orderBy: orderBy as SORTBY,
  });
  return res.status(200).json({
    status: "success",
    result: tasks,
  });
};

const createTask = async (req: Request, res: Response) => {
  const body: Task = req.body;
  verifyCreateTask(body);
  const task = await taskServices.createTask(body);
  return res.status(200).json({
    status: "success",
    result: task,
  });
};

const verifyCreateTask = (task: Task) => {
  if (!task.title) {
    throw new CustomError(codes.BAD_REQUEST, "Task title is required!");
  }
  if (!task.status) {
    throw new CustomError(codes.BAD_REQUEST, "Task status is required!");
  }
  if (!listStatus.includes(task.status)) {
    throw new CustomError(codes.BAD_REQUEST, "Task status must be one of 'todo', 'pending', 'completed'!");
  }
}

const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body: Task = {
    id: Number(id),
    ...req.body,
  };
  if (!body.id) {
    throw new CustomError(codes.BAD_REQUEST, "Task id is required!");
  }
  verifyUpdateTask(body);
  const task = await taskServices.updateTask(body);
  return res.status(200).json({
    status: "success",
    result: task,
  });
};

const verifyUpdateTask = (task: Task) => {
  if (task.title === "") {
    throw new CustomError(codes.BAD_REQUEST, "Task title is required!");
  }
  if (task.status && !listStatus.includes(task.status)) {
    throw new CustomError(codes.BAD_REQUEST, "Task status must be one of 'todo', 'pending', 'completed'!");
  }
}

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await taskServices.deleteTask(Number(id));
  return res.status(200).json({
    status: "success",
  });
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
