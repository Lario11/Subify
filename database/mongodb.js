import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI) {
  throw new Error("Please define the MONGODB_URI environement variable inside .env.<development/production>.local .");
}
// Connect to MongoDB   
const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`MongoDB connected in ${NODE_ENV} mode`);
  } catch (error) {
    console.error('Error connecting to database: ',error);
    process.exit(1);
  }
}
export default connectToDB;