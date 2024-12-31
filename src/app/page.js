"use client";

import React, { useEffect, useState } from "react";
import CertificateCard from "@/components/CertificateCard";

export default function HomePage() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchCertificates() {
      setLoading(true); // Start loading
      try {
        const res = await fetch("/api/certificates");
        if (!res.ok) {
          throw new Error("Failed to fetch certificates");
        }
        const data = await res.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchCertificates();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Certificates</h1>
      {loading && (
        <div className="flex flex-col items-center mt-4">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-ping animation-delay-200"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-ping animation-delay-400"></div>
          </div>
          <p className="mt-2 text-green-600">Loading certificates...</p>
        </div>
      )}
      <div className="grid grid-cols-1 lg:m-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!loading && certificates.length > 0 ? (
          certificates.map((cert) => (
            <CertificateCard key={cert._id} certificate={cert} />
          ))
        ) : (
          !loading && (
            <p className="text-center text-gray-500">No certificates found.</p>
          )
        )}
      </div>
    </div>
  );
}
