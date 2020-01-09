import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("product", productSchema);
