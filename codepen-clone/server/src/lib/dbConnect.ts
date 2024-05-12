import mongoose from "mongoose";

export const dbConnect = async () => {
  const response = await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "webd_codepen_clone",
    }).then((resp) => {
      console.log("Connection established!");
    }).catch((err) => {
      console.log("Error connecting to database:", err);
    });
    return response;
};

export const dbClose = async () => {
  await mongoose.connection.close()
                      .then((resp) => {console.log("Connection closed!!")})
                      .catch((err) => {console.log("Failed to close connection : "+ err )});
};