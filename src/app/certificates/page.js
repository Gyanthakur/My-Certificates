// pages/certificate.js

import React from "react";
import Link from "next/link";

const CertificatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6 text-shadow-md">
          🌟 My Certificates - Gyan Pratap Singh 🌟
        </h1>
        <p className="mt-4 text-lg text-gray-700 italic">
          Welcome to my certificate page! Here you can explore the certificates I've earned in various technologies and fields. 🚀
        </p>

        {/* About Me Section */}
        <div className="mt-10">
          <h2 className="text-4xl font-semibold text-indigo-600 underline">
            About Me
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6 mt-6 hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="text-lg text-gray-800">
              I am a passionate B.Tech student specializing in Computer Science at Kamla Nehru Institute of Technology, Sultanpur. My journey in the world of technology has been filled with learning, creating, and sharing my knowledge with others. I have a keen interest in front-end development, web applications, and problem-solving. 💻🔧
            </p>
          </div>
        </div>

        {/* My Achievements & Certificates Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-semibold text-indigo-600 underline">
            🏅 My Achievements & Certificates 🏅
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6 mt-6 hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="text-lg text-gray-700">
              Over the years, I've earned certificates in various fields related to programming, web development, and problem-solving. Some of the key highlights include:
            </p>
            <div className="mt-4 space-y-6">
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                <p className="text-base text-blue-700 font-semibold">
                  ReactJS Development 🎓 - Gained hands-on experience in building dynamic web applications.
                </p>
              </div>
              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <p className="text-base text-green-700 font-semibold">
                  Git Certification 🐙 - Mastered version control using Git, which has been essential in my collaborative coding projects.
                </p>
              </div>
              <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
                <p className="text-base text-orange-700 font-semibold">
                  Hacktoberfest 2023 🌍 - Contributed to open-source projects and collaborated with the global developer community.
                </p>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                <p className="text-base text-purple-700 font-semibold">
                  Postman Student Expert 📡 - Showcased expertise in API development and management.
                </p>
              </div>
              <div className="p-4 border border-teal-200 rounded-lg bg-teal-50">
                <p className="text-base text-teal-700 font-semibold">
                  Completed various front-end development projects 📱 - Including a food ordering app, e-learning platform, and job portal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Certificates Matter to Me Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-semibold text-indigo-600 underline">
            Why Certificates Matter to Me 📜
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6 mt-6 hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="text-lg text-gray-700">
              Certificates have been instrumental in validating my skills and boosting my confidence. Each certificate represents the hard work and dedication I put into learning new concepts and applying them in real-world projects. They serve as a testimony to my passion for continuous learning and improvement. 🌱💪
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <div>
            <Link href="/" className="bg-blue-600 text-white hover:bg-blue-700 py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
              🔗 View All Certificates 🔗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
