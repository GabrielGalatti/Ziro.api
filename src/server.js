import express from "express";
import { json } from "body-parser";
import config from "./config";
import cors from "cors";
import { connect } from "./utils/db";

import productRouter from "./resources/product/product.router";
import orderRouter from "./resources/order/order.router";

export const app = express();
const router = express.Router();

app.disable("x-powered-by");
app.use(cors());
app.use(json());

app.use("/", router);
app.use("/produtos", productRouter);
app.use("/pedidos", orderRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};
