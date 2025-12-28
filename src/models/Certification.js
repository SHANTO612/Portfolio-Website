import mongoose from "mongoose";
const CertificationSchema = new mongoose.Schema(
  {
    title: String,
    issuer: String,
    year: String,
  },
  { timestamps: true }
);
const Certification = mongoose.models.Certification || mongoose.model("Certification", CertificationSchema);
export default Certification;
