import express from "express";
import mongoose from "mongoose";
import Product from "../models/products.js";

const router = express.Router();

// /* GET home page. .. */
// router.get("/", (req, res) => {
//   res.render("index");
// });

/**
 * GET all products
 */
router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Getting All Products!",
  });
});

/**
 * GET a specific product
 */
router.get("/:productId", async (req, res) => {
  res.status(200).json({
    message: `Getting Product #${req.params.productId}`,
    id: req.params.productId,
  });
});

/**
 * ADD a new product
 */
router.post("/", async (req, res) => {
  // Creates a new product from the parameters in request and saves to DB
  const newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  newProduct
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.status(201).json({
    message: `Adding New Product To Inventory! : ${newProduct}`,
  });
});

/**
 * UPDATE an existing product
 */
router.put("/:productId", async (req, res) => {
  res.status(200).json({
    message: `Updated Product ${req.body.id}!`,
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });
});

export default router;
