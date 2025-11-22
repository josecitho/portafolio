import Image from "next/image";

export default function Hero() {
  return (
    <header className="w-full flex justify-center py-12">
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
  );
}
