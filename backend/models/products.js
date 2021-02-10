import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  description: String,
});

let ProductsModel = mongoose.model("Product", productSchema);
export default ProductsModel;
