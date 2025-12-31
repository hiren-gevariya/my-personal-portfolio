import { ExperienceItem } from "@/public/data/portfolioData";

interface ExperienceProps {
  data: ExperienceItem[];
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-10 mb-8 print:shadow-none animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-600 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600">
          Work Experience
        </h2>
      </div>
      <div className="space-y-8">
        {data.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 pb-8 last:pb-0 group hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
            {/* Timeline line */}
            {index < data.length - 1 && (
              <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600 opacity-30"></div>
            )}

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-3 md:mt-0 md:text-right">
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    {exp.period}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.location}
                  </p>
                </div>
              </div>
              <ul className="list-none space-y-3 mt-4 text-slate-700 dark:text-slate-200">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-indigo-500 dark:text-indigo-400 mt-1.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-indigo-700 dark:hover:bg-indigo-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
