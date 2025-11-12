// prisma/seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // --- Eliminar registros previos (opcional, para no duplicar)
  await prisma.project.deleteMany();
  console.log("📋 Tabla Project limpiada");

  // --- Crear proyectos de ejemplo
  const projects = [
    {
      title: "Auditor de Seguridad Web",
      description: "Herramienta fullstack para detectar vulnerabilidades comunes (XSS, CSRF, SQL Injection). Built with React, Node.js y MongoDB.",
      url: "https://github.com/josecitho/auditor-seguridad",
    },
    {
      title: "E-commerce Seguro",
      description: "Tienda online con autenticación JWT, encriptación de datos sensibles y HTTPS. Desarrollado con Next.js, Prisma y PostgreSQL.",
      url: "https://github.com/josecitho/ecommerce-seguro",
    },
    {
      title: "Dashboard de Monitoreo",
      description: "Panel fullstack en tiempo real para monitorear logs de seguridad y alertas. React, Node.js, WebSockets y Firebase.",
      url: "https://github.com/josecitho/dashboard-seguridad",
    },
    {
      title: "Gestor de Contraseñas",
      description: "Aplicación web segura para almacenar y gestionar contraseñas. Cifrado AES-256, autenticación biométrica incluida.",
      url: "https://dashboard-ejemplo.example.com",
    },
    {
      title: "API REST con Express",
      description: "API completa con autenticación JWT y base de datos MongoDB",
      url: "https://api-rest-ejemplo.example.com",
    },
  ];

  // --- Insertar proyectos en la base de datos
  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log("✅ 5 proyectos creados exitosamente!");

  // --- Leer y mostrar todos los proyectos creados
  const allProjects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  console.log("\n📚 Proyectos en la base de datos:");
  console.table(allProjects);
}

// --- Ejecutar la función y cerrar conexión
main()
  .catch((e) => {
    console.error("❌ Error al ejecutar seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
