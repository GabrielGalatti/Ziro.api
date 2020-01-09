import { merge } from "lodash";
const env = process.env.NODE_ENV || "dev";

const baseConfig = {
  env,
  isDev: env === "dev",
  port: process.env.PORT || 3000
};

let envConfig = {};

switch (env) {
  case "dev":
    envConfig = require("./dev").config;
    break;
  case "test":
  case "prod":
    envConfig = require("./prod").config;
    break;
  default:
    envConfig = require("./dev").config;
}

export default merge(baseConfig, envConfig);
