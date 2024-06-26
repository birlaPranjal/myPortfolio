import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
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