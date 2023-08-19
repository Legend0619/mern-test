import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
//For Using Env File
import dotenv from "dotenv";
//Routes
import userRoutes from "./routes/users.js";
import testRoutes from "./routes/test.js";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
//Setting Limite For Datas Coming To Backend
app.use(bodyParser.json({ limit: "5mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

app.use(cors());
app.use("/user", userRoutes);
app.use("/test", testRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Setting Server Port
const PORT = process.env.PORT || 5000;
//Connecting To Database
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
