import prisma from "@/lib/prisma";
import Hero from "@/components/Hero"; 
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsGrid from "@/components/ProjectsGrid";
import Socials from "@/components/Socials";
import TabsController from "@/components/ui/TabsController";
import GuestbookAccess from "@/components/GuestbookAccess";
import Image from "next/image"; 
import { FileText, Download } from "lucide-react"; 

export default async function Home() {
  let projects = [];
  let fetchError = null;
  try {
    projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.error("Error fetching projects:", e);
    fetchError = e?.message || String(e);
    projects = [];
  }

  return (
    // Fonde base más oscuro y serio
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* Fondo decorativo "Tech Noir" - Azul y Cian sutil */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse delay-1000" />
        {/* Una grilla sutil para efecto técnico */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
        <div className="w-full px-4 max-w-5xl mx-auto">
          
          {/* ================= SECCIÓN HERO REDISEÑADA ================= */}
          <div className="flex flex-col items-center text-center pt-20 pb-10 space-y-8">
            
            {/* 1. La Foto con resplandor CIAN/AZUL */}
            <div className="relative group">
               {/* El aro de luz neón */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative p-1 bg-black rounded-full">
                 
                 <div className="w-[180px] h-[180px] rounded-full overflow-hidden bg-gray-800 flex items-center justify-center border-2 border-cyan-900/50 relative">
                    {/* 👇 FOTO CORREGIDA: profile.jpg */}
                    <Image 
                      src="/profile.jpg" 
                      alt="Jose Valdebenito" 
                      width={180} 
                      height={180} 
                      className="object-cover w-full h-full"
                      priority 
                    />
                 </div>
                 
              </div>
            </div>

            {/* 2. El Nombre con degradado AZUL CIBERNÉTICO */}
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 filter drop-shadow-[0_0_10px_rgba(0,200,255,0.3)]">
                  Jose Valdebenito
                </span>
              </h1>
              
              {/* 3. Roles con estilo TÉCNICO (Monoespaciado) */}
              <h2 className="text-xl text-gray-300 font-medium flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <span>Estudiante de Informática</span>
                <span className="hidden md:inline text-cyan-500/50">—</span>
                <span className="font-mono text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded text-sm border border-cyan-500/20">
                  Ciberseguridad | Backend | Fullstack
                </span>
              </h2>
              {/* 👇👇 AQUÍ ESTÁ EL BOTÓN 👇👇 */}
              <a 
                href="/cv.pdf" 
                download="CV_Jose_Valdebenito.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-cyan-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              >
                <FileText className="w-5 h-5" />
                <span>Descargar Currículum</span>
                <Download className="w-4 h-4" />
              </a>
              {/* 👆👆 FIN DEL BOTÓN 👆👆 */}
            </div>
          </div>
          {/* ================= FIN HERO REDISEÑADA ================= */}


          {fetchError && (
            <div className="mt-6 p-4 rounded-lg bg-red-950/50 border border-red-800/50 text-red-200 text-center font-mono text-sm">
              [ERROR]: Fallo en la conexión a base de datos de proyectos.
            </div>
          )}

          {/* Divisor técnico */}
          <div className="flex justify-center my-12">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent w-full max-w-lg" />
          </div>

          {/* Contenido principal */}
          <div className="w-full space-y-16 pb-16">
            <TabsController tabs={["Acerca", "Habilidades", "Proyectos"]}>
              <About />
              <Skills />
              <ProjectsGrid projects={projects} />
            </TabsController>

            {/* Sección Social con toque azul */}
            <div className="text-center space-y-6">
               <h3 className="text-xl font-semibold text-cyan-400 tracking-wider uppercase font-mono">
                  // Conecta_conmigo
               </h3>
              <Socials />
            </div>
              
            {/* El acceso al Guestbook */}
            <div className="pt-8">
              <GuestbookAccess />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}