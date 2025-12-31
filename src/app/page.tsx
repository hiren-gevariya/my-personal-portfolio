"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import ActionButtons from "../components/ActionButtons";
import ScrollToTop from "../components/ScrollToTop";
import { portfolioData } from "@/public/data/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background Gradient - Warm & Inviting Colors */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 gradient-animated -z-10"></div>

      {/* Animated Background Shapes - Softer Colors */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <ActionButtons />
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <Hero data={portfolioData.personalInfo} />
        <About data={portfolioData.about} />
        <Experience data={portfolioData.experience} />
        <Education data={portfolioData.education} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        {portfolioData.certifications &&
          portfolioData.certifications.length > 0 && (
            <Certifications data={portfolioData.certifications} />
          )}
      </div>
    </main>
  );
}
