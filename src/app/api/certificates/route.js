import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Certificate from "@/models/Certificate";
import cloudinary from "@/lib/cloudinary";
import jwt from "jsonwebtoken"; 





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
  




