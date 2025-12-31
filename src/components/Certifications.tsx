import { Certification } from "@/public/data/portfolioData";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

interface CertificationsProps {
  data: Certification[];
}

const Certifications = ({ data }: CertificationsProps) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-10 mb-8 print:shadow-none animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-600 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600">
          Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((cert, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-transparent hover:border-emerald-300 dark:hover:border-emerald-600"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <FaCertificate className="text-white text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3 font-medium">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full font-medium">
                    {cert.date}
                  </span>
                  {cert.credentialId && (
                    <span className="font-mono text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-emerald-700 dark:hover:bg-emerald-600"
                  >
                    <span>Verify Credential</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
