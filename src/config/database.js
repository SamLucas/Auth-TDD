require("dotenv/config");

const ConfigEnvironment = {
  development: {
    dialect: "sqlite",
    storage: "../database/db.sqlite",
  },
  production: {
    host: "localhost",
    username: "root",
    password: "eunaoseiminhasenha",
    database: "nodeauth",
    dialect: "postgres",
    operatorsAliases: false,
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};

module.exports = ConfigEnvironment[process.env.ENVIRONMENT];
