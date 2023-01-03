import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    const dbState = conn.mongoose.connection.readyState;
    if (dbState === 1) {
      console.log(`MongoDB connection state 1-Connected Successfully`.cyan.underline);
    } else if (dbState === 0) {
      console.log(`MongoDB connection state 0-Disconnected`);
    } else if (dbState === 2) {
      console.log(`MongoDB connection state 2-connecting`);
    } else if (dbState === 3) {
      console.log(`MongoDB connection state 3-disconnecting`);
    }
  } catch (error) {
    console.log(`ERROR Connecting to DB: ${error.message}`.red.underline.bold);

    process.exit(1);
  }
};

export default connectDB;
