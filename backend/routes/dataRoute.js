import { Router } from "express";
export const dataRouter = Router();

dataRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`this is server ${id} `);
});
