import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Certificate from "@/models/Certificate";
import cloudinary from "@/lib/cloudinary";
import jwt from "jsonwebtoken"; 
import mongoose from "mongoose";





export async function GET() {
  try {
    await connectToDatabase();
    const certificates = await Certificate.find({});
    return NextResponse.json(certificates, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch certificates" }, { status: 500 });
  }
}

// export async function POST(req) {
//   try {
//     const { name, description, validationLink, file } = await req.json();
//     const result = await cloudinary.uploader.upload(file, {
//       folder: "certificates",
//     });

//     await connectToDatabase();
//     const newCertificate = new Certificate({
//       name,
//       description,
//       validationLink,
//       image: result.secure_url,
//     });
//     await newCertificate.save();

//     return NextResponse.json({ message: "Certificate added successfully" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to add certificate" }, { status: 500 });
//   }
// };




export async function POST(req) {
    const url = req.nextUrl.pathname;
  
    if (url.includes("/api/certificates")) {
      try {
        const { name, description, validationLink, file } = await req.json();
        const result = await cloudinary.uploader.upload(file, {
          folder: "certificates",
        });
  
        await connectToDatabase();
        const newCertificate = new Certificate({
          name,
          description,
          validationLink,
          image: result.secure_url,
        });
        await newCertificate.save();
  
        return NextResponse.json({ message: "Certificate added successfully" }, { status: 201 });
      } catch (error) {
        return NextResponse.json({ error: "Failed to add certificate" }, { status: 500 });
      }
    }
  
    if (url.includes("/api/admin")) {
      const { email, password } = await req.json();
  
      const isValid =
        email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;
  
      if (isValid) {
        return NextResponse.json({ message: "Login successful" }, { status: 200 });
      } else {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
      }
    }
  }
  




  export async function DELETE(req) {
    try {
      const { certificateId } = await req.json();
      
      // Connect to MongoDB
      await connectToDatabase();
  
      // Find the certificate in the database
      const certificate = await Certificate.findById(certificateId);
      
      if (!certificate) {
        return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
      }
  
      // Delete the image from Cloudinary
      const publicId = certificate.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
  
      // Delete the certificate from MongoDB
      await Certificate.findByIdAndDelete(certificateId);
  
      return NextResponse.json({ message: "Certificate deleted successfully" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to delete certificate" }, { status: 500 });
    }
  }
  
  export async function PUT(req) {
    try {
      const { _id, name, description, image } = await req.json();
  
      // Connect to MongoDB
      await connectToDatabase();
  
      // Find the certificate in the database
      const certificate = await Certificate.findById(_id);
  
      if (!certificate) {
        return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
      }
  
      // Handle image update if a new image is provided
      if (image && image !== certificate.image) {
        // Delete the old image from Cloudinary
        const oldPublicId = certificate.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(oldPublicId);
  
        // Update the image field with the new image
        certificate.image = image;
      }
  
      // Update other fields
      certificate.name = name || certificate.name;
      certificate.description = description || certificate.description;
  
      // Save the updated certificate to the database
      await certificate.save();
  
      return NextResponse.json({ message: "Certificate updated successfully", certificate }, { status: 200 });
    } catch (error) {
      console.error("Error updating certificate:", error);
      return NextResponse.json({ error: "Failed to update certificate" }, { status: 500 });
    }
  }
  


// export async function PUT(req) {
//   try {
//     // Parse request body
//     const { _id, name, description, image, validationLink } = await req.json();

//     if (!_id) {
//       return NextResponse.json({ error: "Missing _id in request body" }, { status: 400 });
//     }

//     // Connect to MongoDB
//     await connectToDatabase();

//     // Find and update the certificate
//     const updatedCertificate = await Certificate.findByIdAndUpdate(
//       _id, // Use _id field
//       { name, description, image, validationLink },
//       { new: true, runValidators: true } // Return the updated document
//     );

//     if (!updatedCertificate) {
//       return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Certificate updated successfully", data: updatedCertificate }, { status: 200 });
//   } catch (error) {
//     console.error("Error updating certificate:", error);
//     return NextResponse.json({ error: "Failed to update certificate" }, { status: 500 });
//   }
// }
