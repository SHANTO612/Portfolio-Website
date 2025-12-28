import mongoose from "mongoose";
const AboutSchema = new mongoose.Schema(
    {
        about_me: String,
        interest_and_passion: [String],
        no_of_projects: String,
        year_of_experience: String,
        no_of_clients: String,
        skills: String,
    },
    { timestamps: true }
);
if (mongoose.models.About) {
    try {
        mongoose.deleteModel("About");
    } catch (e) {}
}
const About = mongoose.model("About", AboutSchema);
export default About;
