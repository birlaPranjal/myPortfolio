import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect("mongodb+srv://birlapranjal460:Z4Y9t8i55R5UWiR@cluster0.1qkfcnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("DB connected Successfully");
    });

    connection.on("error", (err) => {
      console.error(
        "Mongo Connection error, Please make sure MongoDb is running",
        err
      );
      process.exit(1);
    });
  } catch (error) {
    console.error("DB connection Failed: ", error);
  }
}