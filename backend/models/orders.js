import mongoose from 'mongoose'
import productsModel from './products.js'

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: String,
    cart: {type: [productsModel.schema], required: true}, // change to required post testing
    totalCost: {type: Number, required: true},
    time: {type: String, required: true},
    completed: {type: Boolean, required: true}
  });
  
  let OrdersModel = mongoose.model("Order", orderSchema);
  export default OrdersModel;