import express from "express";
import cors from "cors";

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

app.get("/", (req, res) => {
  res.send("wellcome");
});

app.listen(port, () => {
  console.log(`running http://localhost:3000`);
});
