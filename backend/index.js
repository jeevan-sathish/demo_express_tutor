import express from "express";
import cors from "cors";
import { AppError } from "./AppError.js";

import cookieParser from "cookie-parser";

const port = 3000;
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("user", name, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });
  res.json({
    message: "login successfull",
  });
});

app.get("/profile", (req, res) => {
  const name = req.cookies.user;
  res.json({
    message: `this is ${name}`,
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.json({
    message: "logged out succesfully",
  });
});

app.get("/error", (req, res, next) => {
  return next(new AppError("not found", 404));
});

function mymidd(req, res, next) {
  const name = req.body.name;
  if (name === "jeevan") {
    next();
  } else {
    res.status(404).json({
      message: "not matched",
    });
  }
}
function capsmidd(req, res, next) {
  const name = req.body.name;
  if (name.length === 6) {
    next();
  } else {
    res.status(404).json({
      message: "it shoud be atleans 6 char",
    });
  }
}
app.post("/verify", mymidd, capsmidd, (req, res) => {
  res.json({
    message: true,
  });
});

app.get("/", (req, res) => {
  res.send("wellcome");
});

app.listen(port, () => {
  console.log(`running http://localhost:3000`);
});
