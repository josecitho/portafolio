// src/components/GuestbookAccess.jsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GuestbookAccess() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const manejarIngreso = (e) => {
    e.preventDefault()
    
    // Validación estricta de email
    const reglaCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!reglaCorreo.test(email)) {
      setError('❌ Acceso denegado: Formato de correo inválido.')
      return
    }

    setError('')
    router.push(`/guestbook?correo=${email}`)
  }

  return (
    <div className="w-full flex flex-col items-center mt-16 mb-10 font-mono">
      {/* 👇 CAMBIO 1: El borde ahora es Verde Hacker y Gris Oscuro (Stealth) */}
      <div className="p-[1px] rounded-sm bg-gradient-to-r from-green-800 via-green-500 to-gray-900 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
        
        <div className="bg-[#02040a] rounded-sm p-8 max-w-md w-full text-center relative overflow-hidden">
          
          {/* Decoración tipo "Scanline" de terminal */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>

          {/* 👇 CAMBIO 2: Título estilo consola */}
          <h3 className="text-2xl font-bold text-green-500 mb-2 tracking-wider uppercase">
            {'>'} System_Access
          </h3>
          <p className="text-gray-500 mb-6 text-xs border-b border-gray-800 pb-4">
            AUTH_PROTOCOL_V1.0 // INGRESE CREDENCIALES
          </p>
          
          <form onSubmit={manejarIngreso} className="flex flex-col gap-4">
            <div className="relative">
               {/* 👇 CAMBIO 3: Input estilo Terminal */}
              <input 
                type="text"
                placeholder="user@domain.com_" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('') 
                }}
                className={`w-full px-4 py-3 rounded-sm bg-[#0a0f1c] border text-green-400 font-mono outline-none transition-all placeholder-gray-700
                  ${error ? 'border-red-600 focus:border-red-600' : 'border-gray-700 focus:border-green-500 focus:shadow-[0_0_10px_rgba(34,197,94,0.2)]'} 
                `}
              />
            </div>
            
            {error && (
              <p className="text-red-500 text-xs text-left font-bold animate-pulse font-mono border-l-2 border-red-500 pl-2">
                {error}
              </p>
            )}

            {/* 👇 CAMBIO 4: Botón estilo "Execute" */}
            <button 
              type="submit"
              className="w-full py-3 rounded-sm bg-green-700 hover:bg-green-600 text-black font-bold font-mono tracking-widest transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] uppercase text-sm"
            >
              [ Execute_Login ]
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}