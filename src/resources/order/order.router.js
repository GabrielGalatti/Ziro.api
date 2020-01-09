import { Router } from "express";
import controller from "./order.controller";
const router = Router();

router
  .route("/")
  .get(controller.getAll)
  .post(controller.createOne);

export default router;
