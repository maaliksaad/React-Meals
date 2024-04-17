import { Router } from "express";
import handler from "express-async-handler";
import { OrderModel } from "../models/order.model.js";

const router = Router();

router.post(
  "/create",
  handler(async (req, res) => {
    const order = req.body;

    if (order.items.length <= 0) res.status("400").send("Cart Is Empty!");

    const newOrder = new OrderModel({ ...order });
    await newOrder.save();
    res.send(newOrder);
  })
);

export default router;
