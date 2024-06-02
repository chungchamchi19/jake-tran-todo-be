import { appDataSource } from "../../../database/connectDB";
import { Task } from "../../../entities/task";
import { SORTBY } from "../../../types/type.filter";
import config from "../../../configs";
import CustomError from "../../../errors/customError";
import codes from "../../../errors/codes";
import { makeDataUpdate } from "../../../utils/makeDataUpdate";

const getTasks = async (filter: { pageSize: number; orderBy: SORTBY; taskId?: number }) => {
  const { pageSize, orderBy } = filter;
  const taskRepository = appDataSource.getRepository(Task);
  const query = taskRepository.createQueryBuilder("t");
  query.select(["t.id", "t.title", "t.description", "t.status", "t.dueDate"]);
  if (filter.taskId) {
    query.andWhere("t.id = :taskId", { taskId: filter.taskId });
  }
  query.orderBy("t.createdAt", orderBy);
  query.limit(pageSize || config.MAX_RECORDS_PER_REQ);
  return await query.getMany();
};

const createTask = async (task: Task) => {
  const taskRepository = appDataSource.getRepository(Task);
  const taskData = await taskRepository.create(task);
  return await taskRepository.save(taskData);
};

const updateTask = async (task: Task) => {
  const foundTask = await getTasks({ taskId: task.id, pageSize: 1, orderBy: "ASC" });
  if (foundTask.length === 0) {
    throw new CustomError(codes.NOT_FOUND, "Task not found!");
  }
  const taskRepository = appDataSource.getRepository(Task);
  const taskData = makeDataUpdate(task) as Task;
  await taskRepository.update(task.id, taskData);
  return {
    ...foundTask[0],
    ...taskData,
  };
};

const deleteTask = async (taskId: number) => {
  if (!taskId) {
    throw new CustomError(codes.BAD_REQUEST, "Task id is required!");
  }
  const foundTask = await getTasks({ taskId, pageSize: 1, orderBy: "ASC" });
  if (foundTask.length === 0) {
    throw new CustomError(codes.NOT_FOUND, "Task not found!");
  }
  const taskRepository = appDataSource.getRepository(Task);
  await taskRepository.delete(taskId);
  return foundTask[0];
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
