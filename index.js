import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js"; 
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();

app.use(express.json());

// Middleware for cors policy
const corsOptions = {
  origin: "https://booklib-vidhyasagar.netlify.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
// app.use(cors());


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN stack");
});

app.use('/books', booksRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
