interface AboutProps {
  data: {
    summary: string;
  };
}

 const About = ({ data }: AboutProps) => {
  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-10 mb-8 print:shadow-none animate-fade-in-up hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
          About Me
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg md:text-xl pl-4">
        {data.summary}
      </p>
    </section>
  );
}

export default About;
