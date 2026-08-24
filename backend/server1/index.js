import express from "express";
import { dataRouter } from "../routes/dataRoute.js";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use("/server", dataRouter);
app.listen(port, () => {
  console.log(`success http://localhost:${port}`);
});
