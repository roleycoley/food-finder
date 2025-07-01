import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://food-finder-oro4.onrender.com"
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/restaurants", restaurants);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
