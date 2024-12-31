export default function CertificateCard({ certificate }) {
	return (
		<div className="relative p-4  rounded  bg-gradient-to-t from-transparent via-cyan-200 to-transparent group">
			<div className="absolute inset-0 rounded overflow-hidden pointer-events-none">
				<div className="absolute w-full h-[3px] bg-gradient-to-l from-transparent via-red-500 to-transparent animate-borderMove top-0"></div>

				<div className="absolute w-full h-[3px] bg-gradient-to-l from-transparent via-red-500 to-transparent animate-borderMoveRtL bottom-0"></div>

				<div className="absolute w-[3px] h-full bg-gradient-to-t from-transparent via-pink-500 to-transparent animate-borderMovey left-0"></div>

				<div className="absolute w-[3px] h-full bg-gradient-to-t from-transparent via-pink-500 to-transparent animate-borderMoveydown right-0"></div>
			</div>
			{/* Content */}
			<div className="relative bg-white p-6 rounded shadow-lg">
				<img
					src={certificate.image}
					alt={certificate.name}
					className="w-full h-35 object-cover rounded"
				/>
				<div className="flex items-center justify-between gap-10 mt-10">
					<h2 className="text-xl font-bold my-2">{certificate.name}</h2>
					<p className="text-sm text-gray-600">{certificate.description}</p>
					<a
						href={certificate.validationLink}
						target="_blank"
						className="text-blue-500 hover:underline"
						rel="noopener noreferrer"
					>
						View Validation
					</a>
				</div>

				{/* <div className="absolute inset-0 rounded overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[3px] bg-gradient-to-l from-transparent via-green-500 to-transparent animate-borderMove top-0"></div>
        <div className="absolute w-full h-[3px] bg-gradient-to-l from-transparent via-green-500 to-transparent animate-borderMove bottom-0"></div>
        <div className="absolute w-[3px] h-full bg-gradient-to-t from-transparent via-green-500 to-transparent animate-borderMovey left-0"></div>
        <div className="absolute w-[3px] h-full bg-gradient-to-t from-transparent via-green-500 to-transparent animate-borderMovey right-0"></div>
      </div> */}
			</div>
		</div>
	);
}
