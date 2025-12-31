interface AboutProps {
  data: {
    summary: string;
  };
}

 const About = ({ data }: AboutProps) => {
  return (
    <section className="glass dark:glass-dark rounded-3xl shadow-2xl p-8 md:p-10 mb-8 print:shadow-none animate-fade-in-up hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-12 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          About Me
        </h2>
      </div>
      <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg md:text-xl pl-4">
        {data.summary}
      </p>
    </section>
  );
}

export default About;
