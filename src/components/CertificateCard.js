


import React, { useEffect, useState } from "react";
import { jwt } from "jsonwebtoken";
import { toast, ToastContainer } from "react-toastify";

export default function CertificateCard({ certificate }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem("admin_token");

//   // Check if the user is an admin by verifying the token
//   useEffect(() => {
//     const token = localStorage.getItem("admin_token"); 
// 	console.log("token",token);
// 	// Assuming you store the token in localStorage
//     if (token) {
//       try {
//         // Verify the token (using JWT or some other method, depending on your authentication flow)
//         const decoded = jwt.decode(token);
//         if (decoded && decoded.role === "admin") {
//           setIsAdmin(true); // Set admin to true if the token is valid
//         }
//       } catch (error) {
//         console.error("Invalid token", error);
//       }
//     }
//   }, []);

  const deleteCertificate = async () => {
    const response = await fetch("/api/certificates", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ certificateId: certificate._id }),
    });

    const data = await response.json();
    if (response.status === 200) {
		// Display success message using React-Toastify
		toast.success(data.message);
	
		// Reload the page after 3 seconds
		setTimeout(() => {
			window.location.reload();
		}, 3000); // 3000 milliseconds = 3 seconds
	}
	else {
      toast(data.error);
    }
  };

  return (
    // <div className="relative p-4 rounded bg-gradient-to-t from-transparent via-cyan-200 to-transparent group">
	// 	<div className="absolute inset-0 rounded overflow-hidden pointer-events-none">
 	// 			<div className="absolute w-full h-[3px] bg-gradient-to-l from-transparent via-red-500 to-transparent animate-borderMove top-0"></div>

 	// 			<div className="absolute w-full h-[3px] bg-gradient-to-l from-transparent via-red-500 to-transparent animate-borderMoveRtL bottom-0"></div>

 	// 			<div className="absolute w-[3px] h-full bg-gradient-to-t from-transparent via-pink-500 to-transparent animate-borderMovey left-0"></div>

 	// 			<div className="absolute w-[3px] h-full bg-gradient-to-t from-transparent via-pink-500 to-transparent animate-borderMoveydown right-0"></div>
 	// 		</div>
    //   {/* Content */}
    //   <div className="relative bg-white p-6 rounded shadow-lg">
    //     <img
    //       src={certificate.image}
    //       alt={certificate.name}
    //       className="w-full h-35 object-cover rounded"
    //     />
    //     <div className="flex items-center justify-between gap-10 mt-10">
    //       <h2 className="text-xl font-bold my-2">{certificate.name}</h2>
    //       <p className="text-sm text-gray-600">{certificate.description}</p>
    //       <a
    //         href={certificate.validationLink}
    //         target="_blank"
    //         className="text-blue-500 hover:underline"
    //         rel="noopener noreferrer"
    //       >
    //         View Validation
    //       </a>
    //     </div>

    //     {/* Delete button shown only if the user is an admin */}
    //     {token && (
    //       <button
    //         onClick={deleteCertificate}
    //         className="mt-4 text-red-500 hover:underline"
    //       >
    //         Delete Certificate
    //       </button>
    //     )}
    //   </div>
    // </div>
	<div className="relative p-4 border border-blue-600 rounded bg-gradient-to-t from-transparent via-cyan-200 to-transparent group">
  {/* Gradient border animations */}

  <div className="absolute inset-0 rounded overflow-hidden pointer-events-none">
    <div className="absolute w-full h-[3px] bg-gradient-to-l from-transparent via-blue-500 to-transparent animate-borderMove top-0"></div>
    <div className="absolute w-full h-[3px] bg-gradient-to-l from-transparent via-blue-500 to-transparent animate-borderMoveRtL bottom-0"></div>
    <div className="absolute w-[3px] h-full bg-gradient-to-t from-transparent via-blue-500 to-transparent animate-borderMovey left-0"></div>
    <div className="absolute w-[3px] h-full bg-gradient-to-t from-transparent via-blue-500 to-transparent animate-borderMoveydown right-0"></div>
  </div>
  {/* Content */}
  <div className="relative  bg-white p-6 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <ToastContainer position="top-right" autoClose={3000} />
    <img
      src={certificate.image}
      alt={certificate.name}
      className="w-full h-25 object-cover rounded transition-transform transform group-hover:scale-105 duration-300"
    />
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2 text-green-700 group-hover:text-blue-600 transition-colors duration-300">
        {certificate.name}
      </h2>
      <p className="text-sm text-gray-600 mb-4">{certificate.description}</p>
      <a
        href={certificate.validationLink}
        target="_blank"
        className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        rel="noopener noreferrer"
      >
        View Validation
      </a>
    </div>
    {token && (
      <button
        onClick={deleteCertificate}
        className="mt-4 text-red-500 hover:text-red-700 transition-colors duration-300 font-semibold"
      >
        Delete Certificate
      </button>
    )}
  </div>
</div>

  );
}
