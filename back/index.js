import express from "express";
import cors from "cors";
import { ConnectDataBase } from "./Data base/DataBase.js";
import UserRouter from "./router/User.js";
import isAuth from "./middlewares/User.js";
import Admin from "./middlewares/Admin.js";
import MovieRouter from "./router/Movie.js";

const index = express();
const port = 9021;


index.use(cors());

index.use(express.json());

index.use("/User", UserRouter);
index.use("/Movie", MovieRouter);

index.get("/", (req, res) => {
    res.send("Welcome to my API");
});

index.get("/admin", [isAuth, Admin], (req, res) => {
    res.send({ message: "You are the admin" });
});

ConnectDataBase();

index.listen(port, () => {
    console.log(`Your server is running on port ${port}`);
});
