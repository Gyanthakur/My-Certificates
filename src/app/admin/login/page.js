// pages/admin/login.js
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();

      // Store the token in localStorage
      localStorage.setItem("admin_token", data.token);

      toast.success("Logged in successfully!");
      router.push("/admin"); // Redirect to the Admin page
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full sm:w-96">
        <ToastContainer position="top-right" autoClose={3000} />
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 w-full text-black rounded border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 w-full text-black rounded border border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full"
          >
            Admin Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
