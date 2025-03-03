import request from "supertest";

describe("GET /api/tasks (App Router)", () => {
  it("renvoie une liste de tâches (statut 200)", async () => {
    const res = await request("http://localhost:3000").get("/api/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.tasks)).toBe(true);
  });
});
