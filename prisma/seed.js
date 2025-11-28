// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...')

  await prisma.guestbook.deleteMany()
  await prisma.project.deleteMany()
  console.log('🗑️  Datos anteriores eliminados')

  const guestbookData = await prisma.guestbook.createMany({
    data: [
      {
        nombre: 'Juan Pérez',
        email: 'juan.perez@example.com',
        mensaje: '¡Excelente portafolio! Me encantó el diseño.',
      },
      {
        nombre: 'María González',
        email: 'maria.gonzalez@example.com',
        mensaje: 'Muy profesional.',
      },
      {
        nombre: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@example.com',
        mensaje: 'Impresionante trabajo.',
      },
    ],
  })
  console.log(`✅ ${guestbookData.count} mensajes insertados en Guestbook`)

  // TUS 7 PROYECTOS REALES CON URLs CORRECTAS
  const projects = [
    {
      title: 'cv-practica-2025',
      description: 'CV Personal',
      url: 'https://cv-practica-2025.netlify.app/',
      githubUrl: null,
    },
    {
      title: 'project-dashboard-2025',
      description: 'Dashboard basico',
      url: 'https://project-dashboard-2025.netlify.app/',
      githubUrl: 'https://github.com/josecitho/Deashboard.git',
    },
    {
      title: 'mentha-salon-2025',
      description: 'Peluqueria',
      url: 'https://mentha-salon-2025.netlify.app/',
      githubUrl: 'https://github.com/josecitho/Mentha.git',
    },
    {
      title: 'data-mentha-2025',
      description: 'DB de reservas pagina web',
      url: 'data-mentha-2025.netlify.app',
      githubUrl: 'https://github.com/josecitho/Database.git',
    },
    {
      title: 'ApiSegura',
      description: 'API con Autenticacion',
      url: null,
      githubUrl: 'https://github.com/josecitho/ApiSegura.git',
    },
    {
      title: 'hotel-reservas-laravel',
      description: 'Implementado con Laravel y PHP',
      url: 'https://hotel-reservas-laravel-production.up.railway.app/',
      githubUrl: 'https://github.com/josecitho/hotel-reservas-laravel.git',
    },
    {
      title: 'nextjs-dashboard',
      description: 'Dashboard NextJS',
      url: null,
      githubUrl: 'https://github.com/josecitho/nextjs-dashboard.git',
    },
  ]

  for (const project of projects) {
    await prisma.project.create({ data: project })
  }
  console.log(`✅ ${projects.length} proyectos insertados`)

  console.log('🎉 Seed completado!')
}

main()
  .catch((e) => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })