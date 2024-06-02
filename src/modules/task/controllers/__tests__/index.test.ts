import { describe, it, expect, jest, beforeEach, afterAll } from "@jest/globals";
import taskControllers from "..";
import { res } from "../../../../tests/mock";
import server from "../../../..";
import codes from "../../../../errors/codes";

describe("taskControllers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await server.close();
  });

  describe("getTasks", () => {
    it("should return status 200 when get tasks success", async () => {
      const req = {
        query: {
          page: 1,
          limit: 10,
        },
      } as any;
      await taskControllers.getTasks(req, res);
      expect(res.status(200).json).toHaveBeenCalledWith({
        status: "success",
        result: [],
      });
    });
  });

  describe("createTask", () => {
    it("should return status 200 when create task success", async () => {
      const req = {
        body: {
          title: "test",
          description: "test",
          status: "todo",
        },
      } as any;
      await taskControllers.createTask(req, res);
      expect(res.status(200).json).toHaveBeenCalledWith({
        status: "success",
        result: {
          id: 1,
        },
      });
    });
  });
});

jest.mock("../../services/task", () => {
  return {
    getTasks: jest.fn().mockReturnValue([]),
    createTask: jest.fn().mockReturnValue({ id: 1 }),
  };
});
