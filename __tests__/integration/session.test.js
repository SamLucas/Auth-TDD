const request = require("supertest");
const app = require("../../src/app");

const truncate = require("../utils/truncate");
const factory = require("../factorories");

const SessionApi = async (data) => {
  return await request(app).post("/sessions").send(data);
};

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const { email } = await factory.create("User", { password: "samuellucas" });
    const response = await SessionApi({
      email,
      password: "samuellucas",
    });

    expect(response.status).toBe(200);
  });

  it("should not authenticate with invalid crendentials", async () => {
    const { email } = await factory.create("User");
    const response = await SessionApi({
      email,
      password: "samuellucas10",
    });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const { email } = await factory.create("User", { password: "samuellucas" });
    const response = await SessionApi({
      email,
      password: "samuellucas",
    });

    expect(response.body).toHaveProperty("token");
  });

  it("should be able to aceess private routes when authenticated", async () => {
    const user = await factory.create("User", { password: "samuellucas" });
    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("should not be able to aceess private routes without jwt token", async () => {
    const response = await request(app).get("/dashboard");
    expect(response.status).toBe(401);
  });

  it("should not be able to access private routes with invalid jwt token", async () => {
    const user = await factory.create("User", { password: "samuellucas" });
    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer 3284739047`);

    expect(response.status).toBe(401);
  });
});
