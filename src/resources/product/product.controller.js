import { crudControllers } from "../../utils/crud";
import { Product } from "./product.model";

export const searchByBrand = async (req, res) => {
  try {
    const products = await Product.find({
      brand: req.body.brand.trim().toLowerCase()
    })
      .lean()
      .exec();
    res.status(200).json({ data: products });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export default crudControllers(Product);
