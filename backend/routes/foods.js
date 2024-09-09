const { Router } = require("express");
const { foods } = require("../db/users");
const router = Router();
router.get("/foods", async (req, res) => {
  const Food = await foods.find();
  res.send(Food);
});
router.get("/foods/q", async (req, res) => {
  // const { query } = req.body;
  const Food = await foods.find(req.query);
  res.send(Food);
});
router.get("/foods/:id", async (req, res) => {
  const { id } = req.params;
  const foodId = Number(id);
  const Food = await foods.findOne({ id: foodId });
  res.send(Food);
});

module.exports = router;
