"use client";

import React, { useEffect, useState } from "react";
import CertificateCard from "@/components/CertificateCard";

export default function HomePage() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    async function fetchCertificates() {
      const res = await fetch("/api/certificates");
      const data = await res.json();
      setCertificates(data);
    }
    fetchCertificates();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center my-8"></h1>
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Certificates</h1>
      <div className="grid grid-cols-1 m-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates?.map((cert) => (
          <CertificateCard key={cert._id} certificate={cert} />
        ))}
      </div>
    </div>
  );
}
