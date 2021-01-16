import express from "express";
const router = express.Router();
// /* GET home page. */
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
    message: `Getting Product #${
      req.params.productId
    }`,
    id: req.params.productId,
  });
});

/**
 * ADD a new product
 */
router.post("/:productId", async (req, res) => {
  res.status(201).json({
    message: `Adding New Product #${req.body.id} To Inventory!`,
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
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
