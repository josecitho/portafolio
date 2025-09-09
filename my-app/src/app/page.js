import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 font-sans p-6">
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Leon El Camaleon</h1>
        <Image
          src="/profile.jpg"
          alt="Foto de perfil"
          width={140}
          height={140}
          className="rounded-full border-4 border-blue-500 object-cover"
          priority
        />
      </header>
      <section className="max-w-xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Biografía</h2>
        <p>
          Hola, soy <strong>Leo, el Camaleón Informático</strong>. Mi pasión es la tecnología y mi superpoder es adaptarme a cualquier desafío de programación. Mi viaje como desarrollador ha estado lleno de aprendizaje constante, y mi portafolio es un reflejo de esa evolución.
          <br /><br />
          Soy un experto en el <strong>desarrollo frontend</strong>, especializado en crear interfaces de usuario atractivas y funcionales con <strong>React</strong> y <strong>Next.js</strong>. Me fascina transformar ideas complejas en experiencias digitales fluidas e intuitivas. Mi habilidad para cambiar de contexto rápidamente, de una tecnología a otra, me ha permitido trabajar en una amplia gama de proyectos, desde aplicaciones web robustas hasta soluciones de automatización.
          <br /><br />
          Me considero un solucionador de problemas por naturaleza. Fuera del mundo del código, me verás inmerso en una partida de ajedrez o tocando música, pasatiempos que, de alguna manera, me ayudan a mantener la mente ágil y el pensamiento estratégico. Te invito a explorar mi trabajo y a ver cómo mi adaptabilidad me permite crear soluciones innovadoras.
        </p>
      </section>
      {/* Sección de habilidades */}
      <section className="max-w-xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Habilidades</h2>
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">React</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Next.js</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">JavaScript</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">CSS</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Git</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Automatización</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Ajedrez</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Música</li>
        </ul>
      </section>
      {/* Fin sección de habilidades */}
      <footer className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Redes Sociales</h2>
        <ul className="flex gap-6 justify-center">
          <li>
            <a
              href="https://www.linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline font-medium"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline font-medium"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}