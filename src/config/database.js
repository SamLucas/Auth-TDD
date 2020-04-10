require("dotenv/config");

const Dafault = {
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

const ConfigEnvironment = {
  development: {
    dialect: "sqlite",
    storage: "./src/database/db.sqlite",
    ...Dafault,
  },

  test: {
    dialect: "sqlite",
    storage: "./__tests__/db_test.sqlite",
    ...Dafault,
  },
  production: {
    host: "",
    username: "",
    password: "",
    database: "",
    dialect: "postgres",
    operatorsAliases: false,
    ...Dafault,
  },
};

console.log(process.env.NODE_ENV);

module.exports = ConfigEnvironment[process.env.NODE_ENV];
