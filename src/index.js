import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
    path: "./.env",
});

connectDB();

/*
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: DB_NAME });
    app.on("error", (error) => {
        console.log("Error connecting to database", error);
    })
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to database", error);
    throw error;
  }
})();
*/
