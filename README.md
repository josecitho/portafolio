# Portafolio — Proyecto Next.js

Este repositorio contiene un portafolio personal creado con Next.js y Prisma (SQLite).

Características principales:
- Next.js 15
- React 19
- Tailwind CSS
- Prisma + SQLite (archivo: `prisma/dev.db`)

## Requisitos
- Node.js 18+ (recomendado)
- npm o pnpm

## ¿Cómo ejecutar en desarrollo?

Abre una terminal en la raíz del proyecto y ejecuta:

```powershell
cd c:\Users\josev\Escritorio\DeTodo\portafolio
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Prisma Studio (UI para la base de datos)

Para abrir la interfaz gráfica de la base de datos (SQLite) usa:

```powershell
npm run studio
```

Prisma Studio abrirá en `http://localhost:5555` y te permitirá ver/editar las tablas (la base de datos se encuentra en `prisma/dev.db`).

## Semillas (seed)

Si quieres poblar la base de datos con datos de ejemplo, ejecuta:

```powershell
npm run seed
```

## Scripts útiles

- `npm run dev` — Ejecuta Next.js en modo desarrollo
- `npm run build` — Construye para producción
- `npm start` — Inicia la app construida
- `npm run studio` — Abre Prisma Studio
- `npm run seed` — Ejecuta el script de seed
- `npm run lint` — Ejecuta ESLint
- `npm run lint:fix` — Intenta corregir problemas con ESLint

## Archivos importantes

- `prisma/schema.prisma` — Definición del modelo `Project`
- `prisma/dev.db` — Base de datos SQLite (archivo)
- `src/app/page.js` — Página principal
- `src/lib/prisma.js` — Cliente Prisma

## Siguientes pasos sugeridos

- Actualizar enlaces de redes sociales en `src/app/page.js` con tus URLs reales.
- Añadir una pequeña página de administración para crear proyectos desde la UI.
- Integrar Prettier / CI para formateo y lint en commits.

Si quieres, puedo aplicar automáticamente los siguientes cambios: actualizar los enlaces, crear un seed con datos de ejemplo y agregar `.gitignore`.
