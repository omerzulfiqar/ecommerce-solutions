import express from "express";
import mongoose from "mongoose";
import Product from "../models/products.js";

const router = express.Router();

/**
 * GET all products
 */
router.get("/", async (req, res) => {
  // Find all products in db
  Product.find()
  // .select('name price _id')
    .exec()
    .then((products) => {
      const response = {
        count: products.length,
        items: products.map((p) => {
          // Returns brief information of product, with url to the detailed product infromation
          return{
            name: p.name,
            price: p.price,
            _id: p._id,
            request:{
              type: "GET",
              description: "Click on the url to get more detailed product info",
              url: `http://localhost:8080/products/${p._id}`
            }
          }
        })
      }
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

/**
 * GET a specific product
 */
router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .exec()
    .then((item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res
          .status(404)
          .json({ message: "No valid product found for id " + productId });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
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

  // Saving new product to database
  newProduct
    .save()
    .then((newItem) => {
      res.status(201).json({
        message: `Created new product successfully!`,
        createdProduct: {
          name: newItem.name, 
          price: newItem.price, 
          _id: newItem._id,
         request:{
           type: "GET",
           url: `http://localhost:8080/products/${newItem._id}`
         }
        }
      });
    })
    .catch((err) => {
      console.log(err);
      // Allows us to see the error
      res.status(500).json({ error: err });
    });
});

/**
 * UPDATE an existing product
 */
router.patch("/:productId", async (req, res) => {
  const updatesToBeMade = {};

  // Loop through the updates that need to be made
  for (const updates of req.body) {
    updatesToBeMade[updates.propName] = updates.value;
  }
  Product.updateOne({ _id: req.params.productId },{$set: updatesToBeMade,})
    .exec()
    .then((item) => {
      res.status(200).json({
        message: `${req.params.productId} has been successfully updated!`,
        updatedProduct:{
          type: "GET",
          description: "Click on the url below to retrieve all products!",
          url:`http://localhost:8080/products/${req.params.productId}`
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

/**
 * DELETE an existing product
 */
router.delete("/:productId", async (req, res) => {
  Product.remove({ _id: req.params.productId })
    .exec()
    .then((item) => {
      res.status(200).json({
        message: `${req.params.productId} has been successfull deleted!`,
        request: {
          type: "GET",
          description: "Click on the url below to retrieve all products!",
          url: "http://localhost:8080/products/"
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

export default router;
