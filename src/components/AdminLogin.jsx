'use client'
import { useState } from 'react'
import { ShieldAlert, Lock, Trash2, Terminal } from 'lucide-react' 
import { eliminarFirma } from '@/app/actions' // Importamos la función de destruir

export default function AdminLogin({ mensajes }) { // Recibimos los mensajes como prop
  const [access, setAccess] = useState(false)
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // 👇 CONTRASEÑA: admin123 (Cámbiala si quieres)
    if (password === 'admin123') {
      setAccess(true)
    } else {
      alert('⚠️ ACCESO DENEGADO')
    }
  }

  // --- PANTALLA DE BLOQUEO (LOGIN) ---
  if (!access) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-mono p-4">
        <div className="border border-red-900/50 bg-[#0a0000] p-8 rounded-lg max-w-md w-full text-center shadow-[0_0_50px_rgba(255,0,0,0.15)]">
          <ShieldAlert className="w-16 h-16 text-red-600 mx-auto mb-6 animate-pulse" />
          <h1 className="text-2xl text-red-500 font-bold mb-2 tracking-widest">RESTRICTED AREA</h1>
          <p className="text-red-900 text-xs mb-8">AUTHORIZED PERSONNEL ONLY</p>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="password" 
              placeholder="PASSCODE" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black border border-red-800 p-3 text-red-500 text-center tracking-[0.5em] focus:border-red-500 focus:outline-none placeholder-red-900/30 rounded"
            />
            <button className="bg-red-900/20 border border-red-800 text-red-500 py-3 hover:bg-red-600 hover:text-black transition-all font-bold tracking-widest uppercase rounded text-sm">
              [ Unlock_System ]
            </button>
          </form>
        </div>
      </div>
    )
  }

  // --- PANEL DE CONTROL (SI YA ENTRASTE) ---
  return (
    <div className="min-h-screen bg-[#050000] text-red-500 p-4 md:p-8 font-mono">
      <div className="max-w-5xl mx-auto">
        
        {/* CABECERA */}
        <div className="flex justify-between items-end mb-10 border-b border-red-900/50 pb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-red-600">
              <Lock className="w-6 h-6" /> ROOT_CONSOLE
            </h1>
            <p className="text-xs text-red-800 mt-1">/var/admin/users --force-delete-enabled</p>
          </div>
          <button onClick={() => setAccess(false)} className="text-xs border border-red-900 px-4 py-2 hover:bg-red-900/30 transition-colors text-red-400">
            LOGOUT
          </button>
        </div>

        {/* LISTA DE MENSAJES */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-red-400 mb-6 bg-red-950/20 p-3 rounded border border-red-900/30">
            <Terminal className="w-4 h-4" />
            <span className="text-sm">Found {mensajes.length} entries in database...</span>
          </div>

          {mensajes.map((msg) => (
            <div key={msg.id} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 bg-[#0a0000] border border-red-900/30 p-4 rounded hover:border-red-600/50 transition-colors group">
              
              {/* INFO DEL MENSAJE */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-xs text-red-800">
                   <span>ID: {msg.id.slice(-8)}...</span>
                   <span>|</span>
                   <span>{msg.createdAt.toLocaleDateString()}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-red-400 font-bold">{msg.nombre}</span>
                  <span className="text-red-700 text-xs">({msg.email})</span>
                </div>
                <p className="text-gray-500 text-sm italic border-l-2 border-red-900/30 pl-3">
                  "{msg.mensaje}"
                </p>
              </div>

              {/* BOTÓN DE DESTRUIR */}
              <div className="flex items-center">
                <form action={eliminarFirma}>
                  <input type="hidden" name="id" value={msg.id} />
                  <button 
                    type="submit"
                    className="flex items-center gap-2 bg-red-950/30 hover:bg-red-600 hover:text-white text-red-600 border border-red-900 px-4 py-2 rounded transition-all text-xs uppercase font-bold tracking-wide group-hover:shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </form>
              </div>

            </div>
          ))}

          {mensajes.length === 0 && (
            <p className="text-center text-red-900 py-10 border border-dashed border-red-900/30">
              No active records found. System clean.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}