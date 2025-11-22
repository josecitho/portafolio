import { Github, Globe, Code2 } from "lucide-react"; // Asegúrate de tener instalados los íconos

export default function ProjectsGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl bg-[#050816]/50">
        <Code2 className="w-12 h-12 text-gray-700 mx-auto mb-4" />
        <p className="text-gray-500 font-mono">No hay proyectos desplegados en este sector...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="group relative bg-[#071129] border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col"
        >
          {/* Decoración "Tech" en la esquina */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="p-6 flex flex-col flex-grow">
            {/* Título */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
              {project.title}
            </h3>

            {/* Descripción */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
              {project.description || "Sin descripción disponible."}
            </p>

            {/* Botones de Acción */}
            <div className="flex gap-3 mt-auto pt-4 border-t border-gray-800/50">
              
              {/* 1. Botón GitHub (Solo aparece si existe el link) */}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#02040a] border border-gray-700 text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all text-xs font-mono uppercase tracking-wider"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              )}

              {/* 2. Botón Demo (Solo aparece si existe el link) */}
              {project.url && (
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-950/30 border border-cyan-800 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all text-xs font-mono uppercase tracking-wider ml-auto"
                >
                  <Globe className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
