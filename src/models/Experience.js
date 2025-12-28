import mongoose from "mongoose";
const ExperienceSchema = new mongoose.Schema(
    {
        title: String,
        year: String,
        affiliation: String,
        summary: String,
        details: [String],
    },
    { timestamps: true }
);
const Experience = mongoose.models.Experience || mongoose.model("Experience",ExperienceSchema);
export default Experience;