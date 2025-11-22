export default function About() {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff00d4] to-[#00ffd5]">
        Acerca de mí
      </h2>
      <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 max-w-3xl">
        <p className="text-gray-200 leading-relaxed text-lg text-center">
          Hola, soy <span className="font-semibold text-[#00ffd5]">Jose Valdebenito Olivares </span>, estudiante de Informática con mención en <span className="text-[#ff00d4]">Ciberseguridad</span>. Mi pasión es la tecnología y me enfoco en crear soluciones seguras, escalables y accesibles que resuelvan problemas reales.
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
  );
}
