import Image from "next/image";
import prisma from "@/lib/prisma";

export default async function Home() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#071129] to-[#020414] text-white">
      {/* Fondo decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00ffd5] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-fast"></div>
        <div className="absolute -bottom-44 -left-44 w-96 h-96 bg-[#ff00d4] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full">
        
        {/* ====== HEADER ====== */}
        <header className="w-full flex justify-center pt-24 pb-12">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-8 p-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-2xl shadow-purple-500/50">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
                width={180}
                height={180}
                className="rounded-full border-4 border-slate-900 object-cover"
                priority
              />
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-[#ff00d4] via-[#00ffd5] to-[#7cfc00] bg-clip-text text-transparent">
              Jose Valdebenito
            </h1>
            <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
              Estudiante de Informática — Ciberseguridad | Backend · Fullstack · Frontend
            </p>
          </div>
        </header>

        {/* Divisor visual */}
        <div className="flex justify-center my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent w-3/4 max-w-4xl"></div>
        </div>

        {/* ====== CONTENIDO PRINCIPAL ====== */}
        <div className="w-full flex justify-center px-4">
          <div className="max-w-5xl w-full space-y-24 pb-20">

          {/* ====== ACERCA DE MÍ ====== */}
          <section className="w-full flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff00d4] to-[#00ffd5]">
              Acerca de mí
            </h2>
            <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 max-w-3xl">
              <p className="text-gray-200 leading-relaxed text-lg text-center">
                Hola, soy <span className="font-semibold text-[#00ffd5]">Jose Valdebenito Olivares</span>, estudiante de Informática con mención en <span className="text-[#ff00d4]">Ciberseguridad</span>. Mi pasión es la tecnología y me enfoco en crear soluciones seguras, escalables y accesibles que resuelvan problemas reales.
                <br /><br />
                <span className="font-semibold text-[#7cfc00]">En programación</span>, tengo experiencia sólida en:
                <br />
                • <span className="text-[#00ffd5]">Frontend</span>: Construyo interfaces modernas y responsivas con <span className="font-semibold">React</span> y <span className="font-semibold">Next.js</span>, aplicando patrones de diseño y mejores prácticas de UX/UI.
                <br />
                • <span className="text-[#ff00d4]">Backend</span>: Desarrollo APIs robustas, gestiono bases de datos y aseguro la integridad de datos con validaciones y autenticación.
                <br />
                • <span className="text-[#7cfc00]">Fullstack</span>: Integro frontend y backend para crear aplicaciones completas y funcionales, desde el diseño hasta la implementación.
                <br />
                <br />
                Manejo lenguajes como <span className="font-semibold">JavaScript</span>, <span className="font-semibold">Python</span> y <span className="font-semibold">SQL</span>. Soy proficiente con herramientas modernas como <span className="font-semibold">Git</span>, <span className="font-semibold">Prisma</span>, <span className="font-semibold">Tailwind CSS</span> y metodologías ágiles. Siempre busco optimizar código, mejorar la seguridad y escribir soluciones mantenibles.
                <br /><br />
                Fuera del código, me verás jugando ajedrez o tocando música 🎵 — pasatiempos que me mantienen ágil mentalmente y creativo. Te invito a explorar mis proyectos y contactarme para colaborar en ideas innovadoras.
              </p>
            </div>
          </section>

          {/* ====== HABILIDADES ====== */}
          <section className="w-full flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
              Habilidades
            </h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl">
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
                  <p className="font-semibold text-gray-300 group-hover:text-sky-300 transition-colors text-sm">{skill.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ====== MIS PROYECTOS ====== */}
          <section className="w-full flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
              Mis Proyectos
            </h2>
            {projects.length > 0 ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-gradient-to-br from-sky-200/10 to-teal-200/10 backdrop-blur-lg border border-sky-200/30 rounded-xl overflow-hidden hover:border-sky-300/80 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-200/20 transform hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300"></div>
                    <div className="relative p-6 h-full flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-400 group-hover:from-sky-500 group-hover:to-teal-300 transition-all duration-300">
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
              <div className="w-full text-center p-12 bg-white/5 backdrop-blur-lg rounded-xl border border-purple-500/20 max-w-3xl">
                <p className="text-gray-400 text-lg">Aún no hay proyectos. ¡Pronto habrá más! 🚀</p>
              </div>
            )}
          </section>

          {/* ====== REDES SOCIALES ====== */}
          <section className="w-full flex flex-col items-center border-t border-purple-500/20 pt-12">
            <h3 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
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
          </section>

        </div>
        </div>
      </div>
    </div>
  );
}