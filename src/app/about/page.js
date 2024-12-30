"use client";

import { useState } from "react";
import { GithubLogo, LinkedinLogo, TwitterLogo, Envelope } from "phosphor-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactDetails = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">About Me</h1>

      <div className="flex flex-col items-center space-y-6">
        {/* Introduction */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-gray-700 mb-4">
            Hello! I'm <span className="font-semibold text-blue-500">Gyan Pratap Singh</span>, a passionate
            and dedicated front-end developer specializing in building modern, responsive web applications.
            With expertise in <span className="font-semibold text-blue-500">HTML, CSS, JavaScript, React,</span> and <span className="font-semibold text-blue-500">Next.js</span>, I strive to create user-friendly and visually appealing websites.
          </p>

          <p className="text-xl text-gray-700 mb-6">
            Apart from coding, I love collaborating with open-source communities and continuously learning new technologies to stay updated.
          </p>

          {/* Show Contact Details Button */}
          <button
            onClick={toggleContactDetails}
            className="bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            {isVisible ? "Hide" : "Show"} Contact Details
          </button>
        </div>

        {/* Contact Details */}
        {isVisible && (
          <div className="space-y-4 mt-6 text-center text-xl text-gray-700">
            <p>
              <Envelope className="inline-block mr-2 text-blue-600" />
              <strong>Email:</strong> gps.96169@gmail.com
            </p>
            <p>
              <a
                href="https://github.com/Gyanthakur/"
                target="_blank"
                className="flex items-center justify-center text-blue-600 hover:text-blue-700"
              >
                <GithubLogo className="mr-2" />
                <strong>GitHub</strong>
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
                target="_blank"
                className="flex items-center justify-center text-blue-600 hover:text-blue-700"
              >
                <LinkedinLogo className="mr-2" />
                <strong>LinkedIn</strong>
              </a>
            </p>
            <p>
              <a
                href="https://x.com/gps_96169"
                target="_blank"
                className="flex items-center justify-center text-blue-600 hover:text-blue-700"
              >
                <TwitterLogo className="mr-2" />
                <strong>Twitter</strong>
              </a>
            </p>
            <p>
              <a
                href="https://gyan-pratap-singh.vercel.app/"
                target="_blank"
                className="flex items-center justify-center text-blue-600 hover:text-blue-700"
              >
                <strong>Portfolio</strong>
              </a>
            </p>
          </div>
        )}

        {/* Skills & Technologies Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Skills & Technologies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-gray-700">
            <div>
              <h3 className="font-semibold text-xl text-blue-500 mb-2">Frontend Development</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Next.js</li>
                <li>Tailwind CSS</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-blue-500 mb-2">Backend & Tools</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Node.js, Express</li>
                <li>MongoDB, Firebase</li>
                <li>API Integration</li>
                <li>Git, GitHub</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-blue-500 mb-2">Other Skills</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Postman</li>
                <li>Figma</li>
                <li>Version Control</li>
                <li>Cross-Browser Compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
