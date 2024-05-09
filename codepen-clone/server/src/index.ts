import express from "express";
import cors from "cors";
import { config } from 'dotenv';
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";

config(); // Load environment variables from .env file

const app = express();

app.use(express.json());
app.use(cors());

app.use('/compiler', compilerRouter);

dbConnect();
app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000");
});
