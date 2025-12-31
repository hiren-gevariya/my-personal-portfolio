import { EducationItem } from "@/public/data/portfolioData";

interface EducationProps {
  data: EducationItem[];
}

const Education = ({ data }: EducationProps) => {
  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-10 mb-8 print:shadow-none animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-teal-500 to-cyan-600 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
          Education
        </h2>
      </div>
      <div className="space-y-8">
        {data.map((edu, index) => (
          <div
            key={index}
            className="relative pl-8 pb-8 last:pb-0 group hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
            {/* Timeline line */}
            {index < data.length - 1 && (
              <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-teal-500 to-cyan-600 opacity-30"></div>
            )}

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 font-semibold">
                    {edu.institution}
                  </p>
                </div>
                <div className="mt-3 md:mt-0 md:text-right">
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {edu.period}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {edu.location}
                  </p>
                </div>
              </div>
              {edu.persentage && (
                <div className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Percentage: {edu.persentage}
                </div>
              )}
              {edu.description && (
                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;
