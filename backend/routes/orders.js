import express from "express";
const router = express.Router();

/**
 * GET all orders
 */
router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Getting All Orders!",
  });
});

/**
 * GET INDIVIDUAL ORDER
 */
router.get("/:orderId", async (req, res) => {
  res.status(200).json({
    message: `Getting Order #${req.params.orderId}!`,
  });
});


/**
 * CREATE A NEW ORDER
 */
router.post("/:orderId", async (req, res) => {
  res.status(201).json({
    message: `New Order #${req.body.id} Created!`,
    id: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    items: req.body.items,
    notes: req.body.notes,
    totalPrice: req.body.total
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
    totalPrice: req.body.total
  });
});

export default router;
