// src/app/guestbook/page.js
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { agregarFirma } from '../actions'

const prisma = new PrismaClient()

export default async function GuestbookPage({ searchParams }) {
  // 1. Verificamos si traen el correo desde la portada
  const correoPrellenado = searchParams?.correo || ''
  const yaTieneCorreo = correoPrellenado.length > 0

  const mensajes = await prisma.guestbook.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="min-h-screen bg-[#02040a] text-green-500 p-8 font-mono relative overflow-hidden">
      
      {/* Efecto de fondo sutil (Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* 🔙 BOTÓN ESTILO COMANDO */}
        <Link 
          href="/" 
          className="inline-block mb-8 text-gray-500 hover:text-green-400 transition-colors border-b border-transparent hover:border-green-400 pb-1"
        >
          $ cd .. /root
        </Link>

        {/* CABECERA TIPO TERMINAL */}
        <div className="border-b border-green-900 pb-4 mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-widest text-green-500 flex items-center gap-3">
            <span className="animate-pulse">_</span> SYSTEM_LOGS
          </h1>
          <p className="text-xs text-green-800 mt-2">
            /var/www/guestbook/data.log --read-write
          </p>
        </div>
        
        {/* --- FORMULARIO DE INGRESO (INPUT CONSOLE) --- */}
        <div className="bg-[#050810] p-6 border border-green-900/50 mb-12 shadow-[0_0_20px_rgba(0,255,0,0.05)]">
          <div className="mb-4 text-xs text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2">
            {'>'} New_Entry_Protocol
          </div>

          <form action={agregarFirma} className="flex flex-col gap-4">
            
            {/* LÓGICA INTELIGENTE DEL EMAIL */}
            {yaTieneCorreo ? (
              // OPCIÓN A: Autenticado
              <div className="p-3 bg-green-900/10 border-l-2 border-green-500 text-sm text-gray-300 font-mono">
                <span className="text-green-600 mr-2">[AUTH_USER]:</span> 
                <span className="text-green-400">{correoPrellenado}</span>
                <span className="text-green-700 ml-2 animate-pulse">● Connected</span>
                <input type="hidden" name="email" value={correoPrellenado} />
              </div>
            ) : (
              // OPCIÓN B: Manual
              <div className="flex flex-col">
                <label className="text-xs text-green-800 mb-1">USER_EMAIL</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="user@domain.root" 
                  required 
                  className="w-full p-2 bg-black border border-green-900 text-green-400 focus:border-green-500 outline-none placeholder-green-900"
                />
              </div>
            )}

            <div className="flex flex-col">
              <label className="text-xs text-green-800 mb-1">USER_ALIAS</label>
              <input 
                type="text" 
                name="nombre" 
                placeholder="Enter_Nickname" 
                required 
                className="w-full p-2 bg-black border border-green-900 text-green-400 focus:border-green-500 outline-none placeholder-green-900" 
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs text-green-800 mb-1">PAYLOAD_MESSAGE</label>
              <textarea 
                name="mensaje" 
                placeholder="Write_data_packet..." 
                required 
                className="w-full p-2 bg-black border border-green-900 text-green-400 focus:border-green-500 outline-none placeholder-green-900 min-h-[100px]" 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 mt-2 bg-green-900/20 border border-green-600 text-green-500 hover:bg-green-500 hover:text-black font-bold transition-all uppercase tracking-widest text-sm"
            >
              [ Execute_Push_Command ]
            </button>
          </form>
        </div>

        {/* --- LISTA DE MENSAJES (LOG OUTPUT) --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-green-700 mb-6 border-b border-green-900/30 pb-2">
             Recent_Activity_Logs ({mensajes.length})
          </h2>
          
          {mensajes.length === 0 ? (
            <div className="text-green-900 font-mono p-4 border border-dashed border-green-900">
              {'>'} No data packets found in registry...
            </div>
          ) : (
            mensajes.map((entry) => (
              <div key={entry.id} className="group relative pl-6 py-2 border-l border-green-900 hover:border-green-500 transition-colors">
                
                {/* Decoración de línea de tiempo */}
                <div className="absolute left-[-5px] top-3 w-2 h-2 bg-black border border-green-900 group-hover:bg-green-500 transition-colors rotate-45"></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 text-xs mb-1 font-mono">
                  <span className="text-green-700">[{entry.createdAt.toISOString().split('T')[0]}]</span>
                  <span className="text-green-400 font-bold">guest@{entry.nombre}:~$</span>
                  <span className="text-green-800 text-[10px]">{entry.email}</span>
                </div>
                
                <p className="text-gray-400 text-sm font-light pl-2 border-l-2 border-green-900/30 group-hover:border-green-500/50 transition-colors">
                  {entry.mensaje}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}