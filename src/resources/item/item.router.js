import { Router } from "express";

const controler = (req, res) => {
  res.send({ message: "hello" });
};

const router = Router();

// /api/item

router
  .route("/")
  .get(controler)
  .post(controler);

// /api/item/:id

router
  .route("/:id")
  .get(controler)
  .put(controler)
  .delete(controler);

export default router;
