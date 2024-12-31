"use client";

import { useState } from "react";
import {
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
	Envelope,
	WhatsappLogo,
} from "phosphor-react";

export default function AboutPage() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleContactDetails = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className="container mx-auto my-8 p-6 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-xl shadow-xl">
			{/* <div className="container m-auto mt-10"> */}
			<h1 className="text-5xl font-bold text-center mb-8 text-blue-600">
				About Me
			</h1>

			<div className="flex flex-col items-center space-y-10">
				{/* Introduction */}
				<div className="text-center max-w-2xl mx-auto">
					<div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg">
						<p className="text-2xl text-gray-800 mb-6 leading-relaxed">
							Hello! I'm{" "}
							<span className="font-semibold text-blue-500">
								Gyan Pratap Singh
							</span>
							, a passionate and dedicated front-end developer specializing in
							crafting modern, responsive web applications.
						</p>
						<p className="text-2xl text-gray-800 mb-6 leading-relaxed">
							🚀 With expertise in{" "}
							<span className="font-semibold text-blue-500">
								HTML, CSS, JavaScript, React,
							</span>
							and <span className="font-semibold text-blue-500">Next.js</span>,
							I aim to build user-friendly and visually delightful experiences.
						</p>
						<p className="text-2xl text-gray-800 mb-8 leading-relaxed">
							💻 When I’m not coding, I’m collaborating with open-source
							communities or exploring the latest technologies.
						</p>
					</div>

					{/* Show Contact Details Button */}
					<button
						onClick={toggleContactDetails}
						className="bg-blue-600 mt-10 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
					>
						{isVisible ? "Hide 👀" : "Show ✨"} Contact Details
					</button>
				</div>

				{/* Contact Details */}
				{isVisible && (
					<div className="space-y-4 text-center text-xl text-gray-800 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-md">
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
								href="https://wa.me/918957818597?text=Hey%20%F0%9F%91%8B%2C%20how%20can%20I%20help%20you%3F"
								target="_blank"
								className="flex items-center justify-center text-blue-600 hover:text-blue-700"
							>
								<WhatsappLogo className="mr-2" />
								<strong>Whatsapp</strong>
							</a>
						</p>
						<p>
							<a
								href="https://gyan-pratap-singh.vercel.app/"
								target="_blank"
								className="flex items-center justify-center text-blue-600 hover:text-blue-700"
							>
								<strong>🌐 Portfolio </strong>
							</a>
						</p>
					</div>
				)}

				{/* Skills & Technologies Section */}
				<div className="mt-12">
					<h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">
						⚙️ Skills & Technologies
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-gray-700">
						<div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-md">
							<h3 className="font-semibold text-xl text-blue-500 mb-4">
								Frontend Development
							</h3>
							<ul className="list-disc pl-6 space-y-2">
								<li>HTML, CSS, JavaScript</li>
								<li>React, Next.js</li>
								<li>Tailwind CSS</li>
								<li>Responsive Web Design</li>
							</ul>
						</div>

						<div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-md">
							<h3 className="font-semibold text-xl text-blue-500 mb-4">
								Backend & Tools
							</h3>
							<ul className="list-disc pl-6 space-y-2">
								<li>Node.js, Express</li>
								<li>MongoDB, Firebase</li>
								<li>API Integration</li>
								<li>Git, GitHub</li>
							</ul>
						</div>

						<div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-md">
							<h3 className="font-semibold text-xl text-blue-500 mb-4">
								Other Skills
							</h3>
							<ul className="list-disc pl-6 space-y-2">
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
