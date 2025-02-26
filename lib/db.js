import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const ConnectionState = mongoose.connection.readyState;

  if (ConnectionState === 1) {
    console.log("Allready Connected");
    return;
  }

  if (ConnectionState === 2) {
    console.log("Connecting");
    return;
  }

  try {
    const c = mongoose.connect(MONGODB_URI, {
      dbName: "textapi",
      bufferCommands: false,
    });
    console.log("Successfully Connected ", c);
  } catch (error) {
    console.log("Error in connecting database", error);
    throw new Error("Error in connecting database");
  }
};

export default connect;
