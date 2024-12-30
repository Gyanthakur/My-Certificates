
// 'use client';

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// const Navbar = () => {
//   const [isAdmin, setIsAdmin] = useState(false); // Admin authentication state
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/api/admin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (res.ok) {
//       setIsAdmin(true);
//       toast.success("Logged in successfully!");
//       router.push("/admin"); // Redirect to Admin page
//     } else {
//         toast.error("Invalid email or password.");
//     }
//   };

//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       <div className="flex items-center gap-4">
//         <ToastContainer position="top-right" autoClose={3000} />
//         <div className="font-bold text-lg">
//           <Link href="/">My Certificates</Link>
//         </div>
//         <Link href="/about" className="hover:text-gray-400">
//           About
//         </Link>
//         <Link href="/certificates" className="hover:text-gray-400">
//           Certificates
//         </Link>
//       </div>

//       {!isAdmin ? (
//         <form onSubmit={handleLogin} className="flex gap-2 items-center">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="px-2 py-1 text-black rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="px-2 py-1 text-black rounded"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
//           >
//             Admin Login
//           </button>
//         </form>
//       ) : (
//         <div className="flex items-center gap-4">
//           <span>Welcome, Admin</span>
//           <button
//             onClick={() => {
//                 setIsAdmin(false);
//                 toast.info("Logged out successfully.");
//               }}
//             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;









'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // Check if the admin is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  // Handle Logout by clearing the token
  const handleLogout = () => {
    localStorage.removeItem("admin_token"); // Remove token from localStorage
    setIsAdmin(false);
    toast.info("Logged out successfully.");
    router.push("/"); // Redirect to home or any desired page
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center g4 flex-wrap">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="font-bold text-lg">
          <Link href="/">My Certificates</Link>
        </div>
        <Link href="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link href="/certificates" className="hover:text-gray-400">
          Certificates
        </Link>
      </div>


      


      {!isAdmin ? (
        <Link href="/admin/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Admin Login
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <span>Welcome, Gyan Pratap Singh</span>

            <Link href="/admin" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
            Post Certificate
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
              Logout
            </button>
        </div>
      )}
     
    </nav>
  );
};

export default Navbar;
