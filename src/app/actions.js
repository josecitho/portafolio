'use server' // 👈 Esto es obligatorio, indica que este código corre en el servidor

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

// --- FUNCIÓN 1: AGREGAR (La que ya tenías) ---
export async function agregarFirma(formData) {
  // 1. Obtener los datos del formulario HTML
  const nombre = formData.get('nombre')
  const email = formData.get('email')     // 👈 1. Capturamos el email
  const mensaje = formData.get('mensaje')

  // 2. Validación simple (para que no envíen vacíos)
  if (!nombre || !mensaje) {
    return
  }

  // 3. Guardar en la Base de Datos
  await prisma.guestbook.create({
    data: {
      nombre: nombre,
      email: email,     // 👈 4. Enviamos el email a la columna nueva
      mensaje: mensaje,
    },
  })

  // 4. ¡El truco de magia! 
  // Esto le dice a Next.js: "Oye, los datos cambiaron, vuelve a pintar la página del guestbook"
  revalidatePath('/guestbook') 
}

// --- FUNCIÓN 2: ELIMINAR (La nueva para el Admin) ---
export async function eliminarFirma(formData) {
  
  const id = formData.get('id') // Recibimos el ID del mensaje a borrar
  
  if (!id) return

  try {
    // Ordenamos a la base de datos destruir ese registro
    await prisma.guestbook.delete({
      where: {
        id: id
      }
    })

    // Actualizamos ambas páginas para que el cambio se vea al instante
    // Si no pusiéramos esto, tendrías que recargar la página para ver que desapareció
    revalidatePath('/guestbook') 
    revalidatePath('/admin')
    
  } catch (error) {
    console.error("Error al eliminar:", error)
  }
}