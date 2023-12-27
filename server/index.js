import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
/* 
    This line configures the application to use the body-parser middleware for parsing JSON-encoded bodies. Here's a breakdown of the options:
    limit: "30mb": This sets a limit on the size of the JSON payload to 30 megabytes. Requests with a body size exceeding this limit will be rejected.
    extended: true: This option allows for complex JSON structures by enabling the extended mode, which allows nested objects and arrays in the JSON data.
*/
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.mongoDBURL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
