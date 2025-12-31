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
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl hover-glow transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20"></div>
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
          className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {data.name}
        </h1>
        <p
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-medium animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {data.title}
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
          >
            <FaEnvelope className="text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm md:text-base">{data.email}</span>
          </a>
          <a
            href={`tel:${data.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 cursor-pointer"
          >
            <FaPhone className="text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm md:text-base">{data.phone}</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md">
            <FaMapMarkerAlt className="text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm md:text-base">{data.location}</span>
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
              className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 text-white flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:from-cyan-700 hover:to-blue-700"
            >
              <FaLinkedin />
            </a>
          )}
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
          )}
          {data.website && (
            <a
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:from-green-600 hover:to-green-700"
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
