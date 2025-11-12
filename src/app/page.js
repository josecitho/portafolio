import Image from "next/image";
import prisma from "@/lib/prisma";

export default async function Home() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050816] via-[#071129] to-[#020414] text-white">
      {/* Fondo decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
  <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00ffd5] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-fast"></div>
  <div className="absolute -bottom-44 -left-44 w-96 h-96 bg-[#ff00d4] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16 pt-8">
          <div className="inline-block mb-6 p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
            <Image
              src="/profile.jpg"
              alt="Foto de perfil"
              width={160}
              height={160}
              className="rounded-full border-4 border-slate-900 object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-3 bg-gradient-to-r from-[#ff00d4] via-[#00ffd5] to-[#7cfc00] bg-clip-text text-transparent">
            Jose Valdebenito Olivares
          </h1>
          <p className="text-xl text-slate-300 font-light text-center">Estudiante de Informática — Mención Ciberseguridad | Desarrollo Backend · Fullstack · Frontend (en desarrollo)</p>
        </header>

        {/* Biografía */}
        <section className="mb-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff00d4] to-[#00ffd5]">
            Acerca de mí
          </h2>
          <p className="text-gray-200 leading-relaxed text-lg text-center">
            Hola, soy <span className="font-semibold text-[#00ffd5]">Jose Valdebenito Olivares</span>. Estudio Informática con mención en <span className="text-[#ff00d4]">Ciberseguridad</span>. Mi pasión es la tecnología y me enfoco en crear soluciones seguras y accesibles.
            <br /><br />
            Me especializo en <span className="font-semibold text-[#00ffd5]">desarrollo frontend</span>, y también trabajo en <span className="font-semibold text-[#ff00d4]">backend</span> y soluciones <span className="font-semibold text-[#7cfc00]">fullstack</span>. Uso <span className="text-[#00ffd5]">React</span>, <span className="text-[#00ffd5]">Next.js</span> y tecnologías de servidor para crear aplicaciones completas y seguras.
            <br /><br />
            Fuera del código, me verás jugando ajedrez o tocando música 🎵 — pasatiempos que me mantienen ágil mentalmente. Te invito a explorar mi trabajo.
          </p>
        </section>

        {/* Habilidades */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
            Habilidades
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
            {[
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
            ].map((skill) => (
              <div
                key={skill.label}
                className="group bg-gradient-to-br from-sky-200/20 to-teal-200/20 backdrop-blur-lg border border-sky-200/30 rounded-xl p-4 text-center hover:border-sky-300 hover:from-sky-200/30 hover:to-teal-200/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="font-semibold text-gray-700 group-hover:text-sky-600 transition-colors">{skill.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
            Mis Proyectos
          </h2>
            {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-sky-200/10 to-teal-200/10 backdrop-blur-lg border border-sky-200/30 rounded-xl overflow-hidden hover:border-sky-300/80 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-200/20 transform hover:-translate-y-2"
                >
                  {/* Gradiente de fondo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300"></div>

                  <div className="relative p-6 h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-400 group-hover:from-sky-500 group-hover:to-teal-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-sky-600 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-sky-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-sky-200/50 w-full text-center"
                      >
                        Ver Proyecto →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-white/5 backdrop-blur-lg rounded-xl border border-purple-500/20">
              <p className="text-gray-400 text-lg">Aún no hay proyectos. ¡Pronto habrá más! 🚀</p>
            </div>
          )}
        </section>

        {/* Redes Sociales */}
        <footer className="text-center pb-12 border-t border-purple-500/20 pt-8">
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
            Conecta conmigo
          </h3>
          <div className="flex justify-center gap-8">
            {[
              { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/tu-perfil" },
              { name: "GitHub", icon: "🐙", url: "https://github.com/tu-usuario" },
              { name: "Twitter", icon: "𝕏", url: "https://twitter.com/tu-usuario" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl group-hover:animate-bounce">{social.icon}</div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">{social.name}</span>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}