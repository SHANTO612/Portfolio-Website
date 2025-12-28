import mongoose from "mongoose";
const AchievementSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    year: String,
  },
  { timestamps: true }
);
const Achievement = mongoose.models.Achievement || mongoose.model("Achievement", AchievementSchema);
export default Achievement;
