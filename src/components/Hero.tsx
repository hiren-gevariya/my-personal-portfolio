import { PersonalInfo } from "@/public/data/portfolioData";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import Image from "next/image";

interface HeroProps {
  data: PersonalInfo;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-12 mb-8 print:shadow-none animate-fade-in-up hover-lift">
      <div className="text-center">
        {data.profileImage && (
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-indigo-500 to-purple-600 shadow-2xl hover-glow transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20"></div>
              <Image
                src={data.profileImage}
                alt={data.name}
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        )}
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {data.name}
        </h1>
        <p
          className="text-2xl md:text-3xl text-slate-700 dark:text-slate-200 mb-8 font-medium animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {data.title}
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-700 dark:text-slate-200 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
          >
            <FaEnvelope className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm md:text-base font-medium">{data.email}</span>
          </a>
          <a
            href={`tel:${data.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 cursor-pointer"
          >
            <FaPhone className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm md:text-base font-medium">{data.phone}</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-md">
            <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm md:text-base font-medium">{data.location}</span>
          </div>
        </div>

        <div
          className="flex justify-center gap-6 mt-8 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
            >
              <FaLinkedin />
            </a>
          )}
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-white flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
          )}
          {data.website && (
            <a
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:from-emerald-600 hover:to-teal-700"
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
