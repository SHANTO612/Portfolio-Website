import mongoose from "mongoose";
export default async function connectToDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(uri);
}
