const request  = require("supertest");
const app = require('../app')
describe("GET /files", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/v1/files/list").send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ 
      files: expect.anything()
    });
  });
});

