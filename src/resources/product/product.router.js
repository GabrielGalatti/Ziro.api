import { Router } from "express";
import controller, { searchByBrand } from "./product.controller";

const router = Router();

router
  .route("/")
  .get(controller.getAll)
  .post(controller.createOne);

router.route("/marca").get(searchByBrand);

router.route("/:id").get(controller.findById);

export default router;
