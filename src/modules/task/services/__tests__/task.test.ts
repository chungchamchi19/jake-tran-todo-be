import { describe, it, expect, jest, afterAll } from "@jest/globals";
import taskServices from "../task";
import { initData } from "../../../../tests/setup";

describe("taskServices", () => {
  describe("createTask", () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    it("should return a task when create", async () => {
      await initData();
      const task = await taskServices.createTask({
        title: "test",
        description: "test",
        status: "todo",
      });
      expect(task.title).toBe("test");
      expect(task.description).toBe("test");
    });

    it("should not return a task when missing title", async () => {
      try {
        await taskServices.createTask({
          title: null,
          description: "test",
          status: "todo",
        });
      } catch (error: any) {
        expect(error.message).toBe("SQLITE_CONSTRAINT: NOT NULL constraint failed: task.title");
      }
    });
  });

  describe("getTasks", () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    it("should return tasks", async () => {
      const tasks = await taskServices.getTasks({ pageSize: 10, orderBy: "DESC" });
      expect(tasks).not.toBe(undefined);
    });
  });
});
