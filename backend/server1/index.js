import express from "express";

import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

function myMidd(req, res, next) {
  const { name } = req.body;
  if (name === "jeevan") {
    req.userName = name + "s";
    next();
  } else {
    return res.status(201).json({
      message: "error",
    });
  }
}

app.post("/data", myMidd, (req, res) => {
  const username = req.userName;
  return res.json({
    message: `${username} successfull`,
  });
});

app.listen(port, () => {
  console.log(`success http://localhost:${port}`);
});
