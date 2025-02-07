import mongoose from "mongoose";
const AboutSchema = new mongoose.Schema(
    {
        about_me: String,
        no_of_projects: String,
        year_of_experience: String,
        no_of_clients: String,
        skills: String,
    },
    { timestamps: true }
);
const About = mongoose.models.About || mongoose.model("About",AboutSchema);
export default About;