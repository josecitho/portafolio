import { PrismaClient } from '@prisma/client'
import AdminLogin from '@/components/AdminLogin' 

const prisma = new PrismaClient()

export default async function AdminPage() {
  // 1. Buscamos los mensajes en la base de datos 🗄️
  const mensajes = await prisma.guestbook.findMany({
    orderBy: { createdAt: 'desc' },
  })

  // 2. Se los pasamos al componente visual para que los muestre
  return <AdminLogin mensajes={mensajes} />
}