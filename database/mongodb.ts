import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.ts";

// interface CustomConnectOptions extends mongoose.ConnectOptions {
//     signal: AbortSignal;
// }

const connectToDatabase = async () => {
  // const controller = new AbortController();
  // const {signal} = controller;

  try {
    if (DB_URI) {
      await mongoose.connect(DB_URI);
      console.log(`Connected to database in ${NODE_ENV} mode`);
    } else {
      throw new Error("Missing DB_URI env variabke inside .env file");
    }
  } catch (error) {
    console.error("Error Connecting to database", error);
    process.exit(1); // Exit with failure
  }
};

export default connectToDatabase;