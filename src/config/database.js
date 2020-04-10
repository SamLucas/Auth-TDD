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

module.exports = ConfigEnvironment[process.env.ENVIRONMENT];
