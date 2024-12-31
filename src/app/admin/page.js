

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminPage() {


  const token = localStorage.getItem("admin_token");
  const [form, setForm] = useState({
    name: "",
    description: "",
    validationLink: "",
    file: null,
  });
  const [loading, setLoading] = useState(false); // State to track loading status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // useEffect(() => {
   

  //     if (!token) {
  //       router.push("/");
  //     }
  //     else{
  //       router.push("/admin");

  //     }
  //   }, [token]);
  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");

      if (!token) {
        // Redirect to home page if no token is found
        router.push("/");
      } else {
        // Token exists, user is authenticated
        setIsAuthenticated(true);
      }
      setLoading(false); // Update loading state
    }
  }, [router]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("validationLink", form.validationLink);
      formData.append("file", form.file);

      const res = await fetch("/api/certificates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          file: await toBase64(form.file),
        }),
      });

      if (res.ok) {
        toast.success("Certificate added successfully!");
        setForm({ name: "", description: "", validationLink: "", file: null });
        router.push("/");
      } else {
        toast.error("Failed to add certificate.");
      }
    } catch (error) {
      toast.error("Fill All Details");
    } finally {
      setLoading(false); 
    }
  };


  if (!isAuthenticated) {
    return null; // Prevent rendering if not authenticated
  }

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return token && (
    <div className="container mx-auto">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold text-center my-8">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded mb-4"
        ></textarea>
        <input
          type="text"
          placeholder="Validation Link"
          value={form.validationLink}
          onChange={(e) => setForm({ ...form, validationLink: e.target.value })}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="file"
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Posting..." : "Add Certificate"} {/* Display "Posting..." while loading */}
        </button>
      </form>

      {loading && (
        <div className="flex flex-col items-center mt-4">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-ping animation-delay-200"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-ping animation-delay-400"></div>
        </div>
        <p className="mt-2 text-green-600">Your certificate is uploading...</p>
      </div>
      )}
        
       
    </div>
  );
}
