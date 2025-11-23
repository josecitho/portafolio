// src/app/api/admin/login/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // 1. Obtenemos el correo y contraseña que envió el usuario
    const { email, password } = await request.json()

    // 2. Obtenemos las credenciales correctas desde las variables de entorno
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    // 3. Validamos que coincidan
    if (email === adminEmail && password === adminPassword) {
      // ✅ Login exitoso
      return NextResponse.json({ 
        success: true, 
        message: 'Acceso concedido' 
      })
    } else {
      // ❌ Credenciales incorrectas
      return NextResponse.json({ 
        success: false, 
        message: 'Correo o contraseña incorrectos' 
      }, { status: 401 })
    }
  } catch (error) {
    // ⚠️ Error en el servidor
    return NextResponse.json({ 
      success: false, 
      message: 'Error en el servidor' 
    }, { status: 500 })
  }
}
