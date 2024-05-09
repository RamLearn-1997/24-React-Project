import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "webd codepen clone",
    });
    console.log("Connection established!");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
  mongoose.connection.close();
};
