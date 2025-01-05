// "use client";

// import React, { useEffect, useState } from "react";
// import CertificateCard from "@/components/CertificateCard";
// import { ArrowDown, ArrowUp } from "phosphor-react";

// export default function HomePage() {
//   const [certificates, setCertificates] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state
//   const [scrollToTop, setScrollToTop] = useState(true);
//   const handleScroll = () => {
//     if (scrollToTop) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//     }
//     setScrollToTop(!scrollToTop);
//   };

//   useEffect(() => {
//     async function fetchCertificates() {
//       setLoading(true); // Start loading
//       try {
//         const res = await fetch("/api/certificates");
//         if (!res.ok) {
//           throw new Error("Failed to fetch certificates");
//         }
//         const data = await res.json();
//         setCertificates(data);
//       } catch (error) {
//         console.error("Error fetching certificates:", error);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     }

//     fetchCertificates();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
//         {/* Scroll Button */}
//         <button
//         onClick={handleScroll}
//         className="fixed bottom-16 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
//         title={scrollToTop ? "Go to Top" : "Go to Bottom"}
//       >
//         {scrollToTop ? (
//           <ArrowUp size={24} />
//         ) : (
//           <ArrowDown size={24} />
//         )}
//       </button>
//       <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Certificates</h1>
//       {loading && (
//         <div className="flex flex-col items-center mt-4">
//           <div className="flex space-x-2">
//             <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
//             <div className="w-4 h-4 bg-green-500 rounded-full animate-ping animation-delay-200"></div>
//             <div className="w-4 h-4 bg-red-500 rounded-full animate-ping animation-delay-400"></div>
//           </div>
//           <p className="mt-2 text-green-600">Loading certificates...</p>
//         </div>
//       )}
//       <div className="grid grid-cols-1 lg:m-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {!loading && certificates.length > 0 ? (
//           certificates.map((cert) => (
//             <CertificateCard key={cert._id} certificate={cert} />
//           ))
//         ) : (
//           !loading && (
//             <p className="text-center text-gray-500">No certificates found.</p>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import CertificateCard from "@/components/CertificateCard";
import { ArrowDown, ArrowUp } from "phosphor-react";

export default function HomePage() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollToTop, setScrollToTop] = useState(true);

  const smoothScroll = (targetPosition, speed = 10) => {
    const currentPosition = window.scrollY;
    const distance = targetPosition - currentPosition;
    const step = distance / speed;

    let scrollStep = 0;

    const interval = setInterval(() => {
      scrollStep++;
      window.scrollBy(0, step);

      const reachedTarget =
        (step > 0 && window.scrollY >= targetPosition) ||
        (step < 0 && window.scrollY <= targetPosition);

      if (scrollStep >= speed || reachedTarget) {
        window.scrollTo(0, targetPosition); // Ensure it stops exactly at the target
        clearInterval(interval);
      }
    }, 16); // 16ms for ~60fps
  };

  const handleScroll = () => {
    const targetPosition = scrollToTop ? 0 : document.body.scrollHeight;
    smoothScroll(targetPosition, 30); // Adjust speed (higher value for slower scroll)
    setScrollToTop(!scrollToTop);
  };

  useEffect(() => {
    async function fetchCertificates() {
      setLoading(true);
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
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Scroll Button */}
      <button
        onClick={handleScroll}
        className="fixed bottom-16 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110 z-50"
        title={scrollToTop ? "Go to Top" : "Go to Bottom"}
      >
        {scrollToTop ? (
          <ArrowUp size={24} />
        ) : (
          <ArrowDown size={24} />
        )}
      </button>

      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        Certificates
      </h1>

      {/* Loading Animation  */}
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

      {/* Certificate Grid */}
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
