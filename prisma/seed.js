// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...')

  await prisma.guestbook.deleteMany()
  await prisma.project.deleteMany()
  console.log('🗑️  Datos anteriores eliminados')

  // Mensajes del guestbook
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

  // TUS PROYECTOS REALES
  const projects = [
    {
      title: 'hotel-reservas-laravel',
      description: 'Hotel con reservas en Laravel',
      url: 'https://hotel-reservas-laravel.vercel.app',
      githubUrl: 'https://github.com/josesalazar/hotel-reservas-laravel',
    },
    {
      title: 'CV Personal',
      description: 'Proyectos e informacion personal',
      url: 'https://cv-practica-2025.vercel.app',
      githubUrl: null,
    },
    {
      title: 'project-dashboard-2025',
      description: 'Dashboard Demostracion',
      url: 'https://project-dashboard-2025.vercel.app',
      githubUrl: 'https://github.com/josesalazar/project-dashboard-2025',
    },
    {
      title: 'mentha-salon-2025',
      description: 'Pagina con reserva',
      url: 'https://mentha-salon-2025.vercel.app',
      githubUrl: 'https://github.com/josesalazar/mentha-salon-2025',
    },
    {
      title: 'data-mentha-2025',
      description: 'Base de Datos de los registros del salon',
      url: 'https://data-mentha-2025.vercel.app',
      githubUrl: 'https://github.com/josesalazar/data-mentha-2025',
    },
    {
      title: 'NextJs Dashboard',
      description: 'Dashboard con NextJs',
      url: null,
      githubUrl: 'https://github.com/josesalazar/nextjs-dashboard',
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