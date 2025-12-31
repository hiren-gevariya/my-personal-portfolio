import { Project } from "@/public/data/portfolioData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectsProps {
  data: Project[];
}

const Projects = ({ data }: ProjectsProps) => {
  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-10 mb-8 print:shadow-none animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-teal-600 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {data.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-800 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 flex flex-col h-full"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-full text-xs font-medium shadow-sm border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700 dark:border-gray-600 mt-auto">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 justify-center"
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
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 justify-center"
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
