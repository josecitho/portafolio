export default function About() {
  return (
    <section className="w-full flex flex-col items-center font-mono">
      <h2 className="text-4xl font-bold mb-8 text-center text-red-500 tracking-wider">
        [ ABOUT_ME ]
      </h2>
      
      <div className="w-full bg-[#0a0000] backdrop-blur-lg rounded-lg p-8 border border-red-900/30 hover:border-red-600/50 transition-all duration-300 max-w-3xl shadow-[0_0_50px_rgba(220,38,38,0.1)]">
        <div className="space-y-6">
          {/* Header */}
          <div className="border-b border-red-900/30 pb-4">
            <p className="text-red-400 text-sm mb-1">$ whoami</p>
            <p className="text-white font-bold text-xl">José Valdebenito Olivares</p>
            <p className="text-red-600 text-sm mt-1">Informática • Especialización en Ciberseguridad</p>
          </div>

          {/* Descripción */}
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              <span className="text-red-500">{'>'}</span> Desarrollador fullstack enfocado en seguridad y escalabilidad.
            </p>
            <p>
              <span className="text-red-500">{'>'}</span> Especializado en aplicaciones web modernas con React, Next.js y Node.js.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bg-red-950/20 rounded border border-red-900/30 p-4">
            <p className="text-red-400 text-xs mb-3 font-bold tracking-wider">TECH_STACK:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['JavaScript', 'Python', 'SQL', 'React', 'Next.js', 'Git', 'Prisma', 'Tailwind'].map((tech) => (
                <div key={tech} className="bg-black/50 border border-red-900/20 px-3 py-1.5 rounded text-center">
                  <span className="text-red-500/80 text-xs font-mono">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-red-900/30 flex items-center justify-between text-xs">
            <p className="text-red-800">
              <span className="text-red-600">STATUS:</span> Available for collaboration
            </p>
            <p className="text-red-800">
              OFF-DUTY: Chess ♟️ | Music 🎵
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
