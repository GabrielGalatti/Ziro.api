import { Router } from "express";
import controller, { searchByBrand } from "./product.controller";

const router = Router();

router.route("/").post(controller.createOne);

router.route("/marca").post(searchByBrand);

router.route("/:id").get(controller.findById);

export default router;
