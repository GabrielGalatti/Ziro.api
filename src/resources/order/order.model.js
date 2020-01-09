import mongoose from "mongoose";

const orderScheema = new mongoose.Schema(
  {
    orderName: {
      type: String,
      required: true,
      trim: true,
      default: "Pedido Não Nomeado"
    },
    products: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "product",
      required: true
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("order", orderScheema);
