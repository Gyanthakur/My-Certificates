import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  validationLink: { type: String, required: true },
  image: { type: String, required: true }, // Cloudinary image URL
});

export default mongoose.models.Certificate || mongoose.model("Certificate", CertificateSchema);
