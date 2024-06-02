import { describe, it, expect, afterAll, jest } from "@jest/globals";
import request from "supertest";
import server from "../..";

describe("Task", () => {
  afterAll(async () => {
    await server.close();
  });

  describe("GET /api/tasks", () => {
    it("should return status 200 and return tasks", async () => {
      const response = await request(server).get("/api/tasks");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: "success", result: [] });
    });
  });

  describe("POST /api/tasks", () => {
    it("should return status 200 and the task detail", async () => {
      const response = await request(server).post("/api/tasks").send({
        title: "test",
        description: "test",
        status: "todo",
      });
      delete response.body?.result?.id;
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        status: "success",
        result: {
          title: "test",
          description: "test",
          status: "todo",
          dueDate: null,
          createdAt: null,
          updatedAt: null,
        },
      });
    });
  });
});
