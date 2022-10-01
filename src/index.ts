import express, { Request, Response } from "express";

const app = express();

const PORT = 5000

app.use("/", (req, res) => {
  res.send("HELLO WORLD")
})

const start = () => {
  app.listen(PORT, () => {
    console.log(`app has startd on ${PORT} port`);
  });
};

start()