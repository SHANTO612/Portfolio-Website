import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema(
    {
        name: String,
        featured: { type: String, default: "" },
        website: String,
        technologies: String,
        github: String,
        links: [
            {
                label: String,
                url: String,
            }
        ]
    },
    { timestamps: true }
);
const Project = mongoose.models.Project || mongoose.model("Project",ProjectSchema);
export default Project;