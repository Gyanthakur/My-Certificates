export default function CertificateCard({ certificate }) {
    return (
      <div className="border p-4 rounded shadow">
        <img src={certificate.image} alt={certificate.name} className="w-full h-35 object-cover rounded" />
        <div className="flex items-center justify-between gap-10 mt-10">

        <h2 className="text-xl font-bold my-2">{certificate.name}</h2>
        <p className="text-sm text-gray-600">{certificate.description}</p>
        <a href={certificate.validationLink} target="_blank" className="text-blue-500 hover:underline">
          View Validation
        </a>
        </div>
      </div>
    );
  }
  