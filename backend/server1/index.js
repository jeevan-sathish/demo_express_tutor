import express from "express";

import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(port, () => {
  console.log(`success http://localhost:${port}`);
});
