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

  const projects = [
    {
      title: 'E-commerce de Ropa',
      description: 'Tienda online completa con Next.js y PostgreSQL.',
      url: 'https://tienda-ejemplo.com',
      githubUrl: 'https://github.com/usuario/ecommerce',
    },
    {
      title: 'Blog Personal',
      description: 'Blog de tecnología optimizado para SEO.',
      url: 'https://blog-ejemplo.com',
      githubUrl: 'https://github.com/usuario/blog',
    },
    {
      title: 'Dashboard Analítico',
      description: 'Panel de control con gráficos interactivos.',
      url: 'https://dashboard-ejemplo.com',
      githubUrl: 'https://github.com/usuario/dashboard',
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