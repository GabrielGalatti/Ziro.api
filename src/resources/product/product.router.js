import { Router } from "express";
import controller, { searchByBrand } from "./product.controller";

const router = Router();

router.route("/").post(controller.createOne);

router.route("/marca").post(searchByBrand);

router.route("/getName").post(controller.findById);

export default router;
