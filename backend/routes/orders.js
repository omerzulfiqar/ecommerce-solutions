import express from "express";
import mongoose from "mongoose";
import Order from "../models/orders.js";
// import Product from '../models/products.js'

const router = express.Router();

/**
 * GET all orders
 */
router.get("/", async (req, res) => {
  Order.find()
    .exec()
    .then((orders) => {
      res.status(200).json({
        count: orders.length,
        items: orders.map((o) => {
          return {
            _id: o._id,
            name: o.name,
            totalCost: o.totalCost,
            time: o.time,
            request: {
              type: "GET",
              description:
                "Click on the url below to get further order information.",
              url: `http://localhost:8080/orders/${o._id}`,
            },
          };
        }),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

/**
 * GET INDIVIDUAL ORDER
 */
router.get("/:orderId", async (req, res) => {
  const orderId = req.params.orderId;
  Order.findById(orderId)
    .exec()
    .then((requestedOrder) => {
      requestedOrder
        ? res.status(200).json({
            order: requestedOrder,
          })
        : res.status(404).json({
            message: `No valid order found with corresponding id ${orderId}!`,
          });
    })
    .catch((err) => {
      console.log(err);
      re.status(500).json({
        error: err,
      });
    });
});

/**
 * CREATE A NEW ORDER
 */
router.post("/", async (req, res) => {

  // Check DB for product before posting

  const newOrder = new Order({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    phone: req.body.phone,
    totalCost: req.body.totalCost,
    cart: req.body.cart,
    time: req.body.time,
    completed: req.body.completed,
  });

  newOrder
    .save()
    .then((newItem) => {
      res.status(201).json({
        message: "New order created successfully!",
        newOrder: {
          _id: newItem._id,
          name: newItem.name,
          totalCost: newItem.totalCost,
          request: {
            type: "GET",
            description:
              "Click on the url to get more information on this order.",
            url: `http:localhost:8080/orders/${newItem._id}`,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

/**
 * UPDATE EXISTING ORDER
 */
router.put("/:orderId", async (req, res) => {
  res.status(200).json({
    message: `Order #${req.body.id} Updated!`,
    id: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    items: req.body.items,
    notes: req.body.notes,
    totalPrice: req.body.total,
  });
});

/**
 * DELETE EXISTING ORDER
 */
router.delete("/:orderId", async (req, res) => {
  Order.remove({ _id: req.params.orderId })
    .exec()
    .then((order) => {
      res.status(200).json({
        message: `Order #${req.params.orderId} has been successfull deleted!`,
        request: {
          type: "GET",
          description: "Click on the url below to retrieve all orders!",
          url: "http://localhost:8080/orders/"
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

export default router;
