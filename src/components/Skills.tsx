import { Skill } from "@/public/data/portfolioData";

interface SkillsProps {
  data: Skill[];
}

const Skills = ({ data }: SkillsProps) => {
  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-10 mb-8 print:shadow-none animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((skill, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"></span>
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-full text-sm font-medium shadow-sm border border-cyan-400/20 hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
