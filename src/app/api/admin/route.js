// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { email, password } = await req.json();

//   const isValid =
//     email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;

//   if (isValid) {
//     return NextResponse.json({ message: "Login successful" }, { status: 200 });
//   } else {
//     return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
//   }
// }

// api/admin.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"; // You can use this for JWT token generation

export async function POST(req) {
  const { email, password } = await req.json();

  // Verify email and password
  const isValid =
    email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;

  if (isValid) {
    // Generate a JWT token with a secret key and an expiration time
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }
}
