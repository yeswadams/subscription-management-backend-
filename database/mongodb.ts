import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.ts";

interface CustomConnectOptions extends mongoose.ConnectOptions {
    signal: AbortSignal;
}

const connectToDatabase = async () => {
  const controller = new AbortController();
  const {signal} = controller;

  try {
    if (DB_URI) {
      await mongoose.connect(DB_URI, { signal } as CustomConnectOptions);
      console.log("Connected to MongoDB");
    } else {
      console.error("Missing DB_URI");
    }
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
