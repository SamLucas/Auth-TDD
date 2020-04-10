const request = require("supertest");
const app = require("../../src/app");

const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  // Primeiro teste base
  // it("should sum two numbers", () => {
  //   const x = 2;
  //   const y = 4;

  //   const sum = x + y;

  //   expect(sum).toBe(6);
  // });

  // // Primeiro teste base
  // it("should create new user with email especificated", async () => {
  //   const user = await User.create({
  //     name: "Samuel",
  //     email: "samuellucas0603@gmail.com",
  //     password_hash: "1231244154",
  //   });

  //   expect(user.email).toBe("samuellucas0603@gmail.com");
  // });

  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid crendentials", async () => {
    const user = await User.create({
      name: "Samuel",
      email: "samuellucas0603@gmail.com",
      password_hash: "1231244154",
    });

    const response = await request(app).post("/sessions").send({
      email: "samuellucas0603@gmail.com",
      password_hash: "1231244154",
    });

    expect(response.status).toBe(200);
  });
});
