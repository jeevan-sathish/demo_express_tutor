import express from "express";
import cors from "cors";
import { dataRouter } from "../routes/dataRoute.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());

app.use("/server", dataRouter);

app.listen(port, () => {
  console.log(`success http://localhost:${port}`);
});
