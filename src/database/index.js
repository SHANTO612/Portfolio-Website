import mongoose from "mongoose";
export default async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://alfahadshanto:shanto612@cluster0.achyd.mongodb.net/"
    );
    console.log("Database is connected successfully");
  } catch (error) {
    console.log(error);
  }
}
