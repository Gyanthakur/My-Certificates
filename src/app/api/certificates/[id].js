// // In pages/api/certificates/[id].js

// import { connectToDatabase } from "@/lib/mongodb"; // Example for MongoDB connection

// export default async function handler(req, res) {
//   const { method } = req;
//   const { id } = req.query; // Get the ID from the query parameter

//   const { db } = await connectToDatabase(); // Connect to your database

//   switch (method) {
//     case "DELETE":
//       try {
//         // Ensure that the ID is in the correct format
//         console.log(`Deleting certificate with ID: ${id}`);

//         const result = await db.collection("certificates").deleteOne({ _id: id });

//         if (result.deletedCount === 1) {
//           res.status(200).json({ message: "Certificate deleted successfully" });
//         } else {
//           res.status(404).json({ message: "Certificate not found" });
//         }
//       } catch (error) {
//         console.error("Error during delete:", error);
//         res.status(500).json({ message: "Error deleting certificate" });
//       }
//       break;

//     default:
//       res.status(405).json({ message: `Method ${method} Not Allowed` });
//       break;
//   }
// }
