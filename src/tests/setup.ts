import { afterAll, beforeAll } from "@jest/globals";
import { appDataSource } from "../database/connectDB";
import { Task } from "../entities/task";

beforeAll(async () => {
  await appDataSource.initialize();
});

afterAll(async () => {
  const taskRepository = appDataSource.getRepository(Task);
  await taskRepository.clear();
});

export const initData = async () => {
  const taskRepository = appDataSource.getRepository(Task);
  await taskRepository.save({
    title: "test",
    description: "test",
    status: "todo"
  });
};
