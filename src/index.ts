import { config } from "dotenv"
config()
import express, { Request, Response } from "express";
import sequelize from './db/db'
import cors from "cors"

// console.log("==> 777 ", process.env.PORT)

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/", (req, res) => {
  res.send("HELLO WORLD")
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log(`app has startd on ${PORT} port`);
    });
  } catch(error) {
    console.log('==> error ', error)
  }
};

start()