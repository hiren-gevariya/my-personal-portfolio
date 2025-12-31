import { Project } from "@/public/data/portfolioData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectsProps {
  data: Project[];
}

const Projects = ({ data }: ProjectsProps) => {
  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-10 mb-8 print:shadow-none animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-600 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {data.map((project, index) => (
          <div
            key={index}
            className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 flex flex-col h-full"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-purple-600 dark:bg-purple-500 text-white rounded-full text-xs font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-purple-700 dark:hover:bg-purple-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700 mt-auto">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 justify-center hover:bg-indigo-700 dark:hover:bg-indigo-600"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div></div>
              )}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 justify-center"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
