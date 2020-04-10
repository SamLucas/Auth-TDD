const bcrypt = require("bcryptjs");
const truncate = require("../utils/truncate");

const { User } = require("../../src/app/models");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Samuel",
      email: "samuellucas0603@gmail.com",
      password: "samuellucas",
    });

    const campareHash = await bcrypt.compare("samuellucas", user.password_hash);
    expect(campareHash).toBe(true);
  });
});
