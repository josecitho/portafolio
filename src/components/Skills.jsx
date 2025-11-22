export default function Skills() {
  const skills = [
    { label: "React", icon: "⚛️" },
    { label: "Next.js", icon: "▲" },
    { label: "Backend", icon: "🖥️" },
    { label: "Fullstack", icon: "🔗" },
    { label: "JavaScript", icon: "📜" },
    { label: "CSS/Tailwind", icon: "🎨" },
    { label: "Git", icon: "🌿" },
    { label: "Automatización", icon: "⚙️" },
    { label: "Ajedrez", icon: "♟️" },
    { label: "Música", icon: "🎶" },
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
        Habilidades
      </h2>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-3xl">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="group bg-gradient-to-br from-sky-200/20 to-teal-200/20 backdrop-blur-lg border border-sky-200/30 rounded-xl p-6 text-center hover:border-sky-300 hover:from-sky-200/30 hover:to-teal-200/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="font-semibold text-gray-300 group-hover:text-sky-300 transition-colors text-base">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
