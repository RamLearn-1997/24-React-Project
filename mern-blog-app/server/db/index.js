const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

//Set up default mongoose connection
mongoose
  .connect(
    "YOUR_CONNECTION_STRING"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));


