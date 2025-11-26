# 🚀 Portafolio Personal con Gestión de Proyectos

Portafolio personal desarrollado con Next.js 15, que incluye un libro de firmas interactivo y un panel de administración seguro para gestionar comentarios y proyectos.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración Local](#-instalación-y-configuración-local)
- [Instalación y Ejecución con Docker](#-instalación-y-ejecución-con-docker)
- [Variables de Entorno](#-variables-de-entorno)
- [Base de Datos](#-base-de-datos)
- [Panel de Administración](#-panel-de-administración)
- [Despliegue en Vercel](#-despliegue-en-vercel)
- [Scripts Disponibles](#-scripts-disponibles)

---

## ✨ Características

### Funcionalidades Principales

- **Portafolio Personal**: Muestra información profesional y proyectos
- **Libro de Firmas (Guestbook)**: Los visitantes pueden dejar comentarios
- **Panel de Administración Seguro**: 
  - Login con correo electrónico y contraseña
  - Validación en el servidor
  - Gestión de comentarios (visualizar y eliminar)
- **Base de Datos**: Almacenamiento persistente con PostgreSQL y Prisma ORM
- **Diseño Responsivo**: Adaptado para dispositivos móviles y desktop
- **Temas Personalizados**: Interfaz con diseño cyberpunk/hacker para el panel admin

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework de React con App Router
- **React 19** - Biblioteca de UI
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos

### Backend
- **Next.js API Routes** - Endpoints del servidor
- **Prisma ORM** - Cliente de base de datos type-safe
- **PostgreSQL** - Base de datos relacional

### Herramientas de Desarrollo
- **ESLint** - Linter de código
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

### Despliegue
- **Vercel** - Plataforma de hosting y deployment
- **Docker** - Containerización de la aplicación
- **GitHub** - Control de versiones

---

## 📁 Estructura del Proyecto

```
portafolio-postgres-prisma/
├── prisma/
│   ├── schema.prisma          # Esquema de la base de datos
│   ├── migrations/            # Migraciones de Prisma
│   └── seed.js               # Datos de prueba
├── public/                    # Archivos estáticos
├── src/
│   ├── app/
│   │   ├── actions.js         # Server Actions (eliminar firmas)
│   │   ├── admin/
│   │   │   └── page.js        # Página del panel de administración
│   │   ├── api/
│   │   │   └── admin/
│   │   │       └── login/
│   │   │           └── route.js  # API de autenticación
│   │   ├── guestbook/         # Página del libro de firmas
│   │   ├── layout.js          # Layout principal
│   │   └── page.js            # Página de inicio
│   ├── components/
│   │   ├── AdminLogin.jsx     # Componente del login y panel admin
│   │   └── ...                # Otros componentes
│   └── lib/                   # Utilidades
├── .dockerignore              # Archivos excluidos del build Docker
├── .env.local                 # Variables de entorno (no se sube a Git)
├── .gitignore                 # Archivos ignorados por Git
├── docker-compose.yml         # Orquestación de servicios Docker
├── Dockerfile                 # Configuración de imagen Docker
├── next.config.js             # Configuración de Next.js
├── package.json               # Dependencias del proyecto
├── postcss.config.js          # Configuración de PostCSS
├── tailwind.config.js         # Configuración de Tailwind
└── README.md                  # Este archivo
```

---

## 🚀 Instalación y Configuración Local

### Prerrequisitos

- **Node.js** 18.17 o superior
- **npm**, **yarn** o **pnpm**
- **PostgreSQL** (local o remoto)
- **Git**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/josecitho/portafolio.git
   cd portafolio-postgres-prisma
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   # Base de datos
   DATABASE_URL="postgresql://usuario:contraseña@host:5432/nombre_db"
   
   # Credenciales del administrador
   ADMIN_EMAIL="admin@tuportafolio.com"
   ADMIN_PASSWORD="tu_contraseña_segura"
   ```

4. **Configurar la base de datos con Prisma**
   ```bash
   # Generar el cliente de Prisma
   npx prisma generate
   
   # Ejecutar migraciones (crear tablas)
   npx prisma db push
   
   # (Opcional) Abrir Prisma Studio para ver la base de datos
   npx prisma studio
   ```

5. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

6. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

---

## 🐳 Instalación y Ejecución con Docker

### Prerrequisitos Docker

- **Docker Desktop** instalado y corriendo
- **Git**

### Pasos para Ejecutar con Docker

1. **Clonar el repositorio y cambiar a la rama docker_deploy**
   ```bash
   git clone https://github.com/josecitho/portafolio.git
   cd portafolio-postgres-prisma
   git checkout docker_deploy
   ```

2. **Levantar todos los servicios**
   ```bash
   docker-compose up --build
   ```
   
   Esto levantará automáticamente:
   - ✅ **Aplicación Next.js** (puerto 3000)
   - ✅ **PostgreSQL 15** (puerto 5432)
   - ✅ **pgAdmin 4** (puerto 5050)

3. **Insertar datos de prueba** (en otra terminal)
   ```bash
   docker-compose exec app npx prisma db seed
   ```

4. **Acceder a los servicios**
   - **Portafolio:** http://localhost:3000
   - **Panel Admin:** http://localhost:3000/admin
   - **pgAdmin:** http://localhost:5050

### 🔑 Credenciales Docker

#### Admin del Portafolio
- Email: `admin@tuportafolio.com`
- Password: `admin123`

#### pgAdmin (Gestión Visual de BD)
- URL: http://localhost:5050
- Email: `admin@admin.com`
- Password: `admin123`

#### Conexión PostgreSQL en pgAdmin
Para conectar la base de datos en pgAdmin:
1. Click derecho en "Servers" → "Register" → "Server"
2. **Pestaña General:**
   - Name: `Portafolio DB`
3. **Pestaña Connection:**
   - Host: `db` ⚠️ (importante: usar "db", no "localhost")
   - Port: `5432`
   - Database: `portafolio_db`
   - Username: `portafolio_user`
   - Password: `portafolio_password`
   - ✅ Marcar "Save password"

### 🐳 Comandos Docker Útiles

```bash
# Ver estado de contenedores
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f

# Detener todos los servicios
docker-compose down

# Detener y eliminar volúmenes (resetear BD)
docker-compose down -v

# Reiniciar un servicio específico
docker-compose restart app

# Ejecutar migraciones de Prisma
docker-compose exec app npx prisma migrate deploy

# Abrir Prisma Studio (interfaz visual)
docker-compose exec app npx prisma studio
# Luego abrir http://localhost:5555
```

### 📦 Arquitectura Docker

```
Docker Compose
│
├── 📦 portafolio-app (Next.js)
│   ├── Puerto: 3000
│   ├── Puerto: 5555 (Prisma Studio)
│   └── Conecta a: portafolio-db
│
├── 🗄️ portafolio-db (PostgreSQL 15)
│   ├── Puerto: 5432
│   ├── Usuario: portafolio_user
│   ├── Base de datos: portafolio_db
│   └── Volumen persistente: postgres_data
│
└── 🔧 portafolio-pgadmin (pgAdmin 4)
    ├── Puerto: 5050
    └── Volumen persistente: pgadmin_data
```

### 🔧 Archivos Docker del Proyecto

- **`Dockerfile`**: Configuración multi-stage para optimizar el tamaño de la imagen
- **`docker-compose.yml`**: Orquestación de los 3 servicios (app, db, pgadmin)
- **`.dockerignore`**: Archivos excluidos del build Docker
- **`next.config.js`**: Configurado con `output: 'standalone'` para Docker
- **`prisma/seed.js`**: Script de datos de prueba para la base de datos

### ⚡ Ventajas de la Versión Docker

- ✅ **Setup en segundos**: Un solo comando levanta todo
- ✅ **Entorno consistente**: Funciona igual en todos los sistemas operativos
- ✅ **Aislamiento**: No interfiere con otros proyectos locales
- ✅ **pgAdmin incluido**: Gestión visual profesional de la base de datos
- ✅ **Datos persistentes**: Los datos sobreviven a reinicios de contenedores
- ✅ **Fácil de limpiar**: `docker-compose down` elimina todo sin dejar rastros

---

## 📝 Variables de Entorno

### Variables Requeridas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `DATABASE_URL` | URL de conexión a PostgreSQL | `postgresql://user:pass@host:5432/db` |
| `ADMIN_EMAIL` | Email del administrador | `admin@ejemplo.com` |
| `ADMIN_PASSWORD` | Contraseña del administrador | `contraseña_segura_123` |

### Configuración por Ambiente

- **Local (sin Docker)**: Usa `.env.local`
- **Docker**: Variables configuradas en `docker-compose.yml`
- **Producción (Vercel)**: Configura en el dashboard de Vercel

⚠️ **IMPORTANTE**: El archivo `.env.local` NO se sube a Git por seguridad (está en `.gitignore`)

---

## 🗄️ Base de Datos

### Esquema de Prisma

El proyecto utiliza dos modelos principales:

#### Modelo Guestbook (Libro de Firmas)
```prisma
model Guestbook {
  id        String   @id @default(cuid())
  nombre    String
  email     String
  mensaje   String
  createdAt DateTime @default(now())
}
```

#### Modelo Project (Proyectos)
```prisma
model Project {
  id          String   @id @default(cuid())
  title       String
  description String?
  url         String?
  githubUrl   String?
  createdAt   DateTime @default(now())
}
```

### Comandos Útiles de Prisma

```bash
# Ver/editar datos visualmente
npx prisma studio

# Actualizar el esquema
npx prisma db push

# Crear migración
npx prisma migrate dev --name nombre_migracion

# Generar cliente después de cambios
npx prisma generate

# Insertar datos de prueba
npx prisma db seed
```

---

## 🔐 Panel de Administración

### Acceso

**URL**: `/admin`

**Credenciales**: Las configuradas en las variables de entorno

### Funcionalidades del Panel

1. **Login Seguro**
   - Validación de correo electrónico y contraseña
   - Autenticación en el servidor (no en el cliente)
   - Mensajes de error claros

2. **Gestión de Comentarios**
   - Visualizar todos los comentarios del libro de firmas
   - Ver información detallada (nombre, email, fecha, mensaje)
   - Eliminar comentarios individualmente

3. **Interfaz**
   - Diseño temático cyberpunk/hacker
   - Responsivo (funciona en móvil y desktop)
   - Efectos visuales y animaciones

### Arquitectura de Seguridad

```
Cliente (Navegador)
    ↓
AdminLogin.jsx (envía credenciales)
    ↓
POST /api/admin/login
    ↓
route.js (valida con variables de entorno)
    ↓
Respuesta: { success: true/false }
```

**Ventajas:**
- ✅ Credenciales nunca expuestas en el cliente
- ✅ Validación server-side
- ✅ No se puede bypassear desde DevTools

---

## 🌐 Despliegue en Vercel

### Despliegue Inicial

1. **Conectar repositorio a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Clic en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es Next.js

2. **Configurar variables de entorno**
   - En el dashboard de Vercel, ve a "Settings" → "Environment Variables"
   - Agrega las variables:
     - `DATABASE_URL`
     - `ADMIN_EMAIL`
     - `ADMIN_PASSWORD`
   - Selecciona todos los ambientes (Production, Preview, Development)

3. **Hacer Deploy**
   - Haz clic en "Deploy"
   - Espera ~2 minutos
   - ¡Tu sitio estará en línea!

### Despliegues Posteriores

Vercel está conectado a tu repositorio de GitHub:

```bash
# Haz cambios en tu código local
git add .
git commit -m "descripción de cambios"
git push origin main
```

**Vercel automáticamente:**
1. Detecta el push
2. Construye el proyecto
3. Despliega la nueva versión
4. Te notifica cuando esté listo

### Redeploy Manual

Si cambias variables de entorno:
1. Ve al dashboard de Vercel
2. Clic en "Deployments"
3. Clic en los 3 puntos de la última versión
4. Clic en "Redeploy"

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en localhost:3000

# Producción
npm run build        # Construye la aplicación para producción
npm start            # Inicia servidor de producción

# Linting
npm run lint         # Ejecuta ESLint

# Prisma
npx prisma studio    # Abre interfaz visual de la base de datos
npx prisma db push   # Sincroniza esquema con la base de datos
npx prisma generate  # Genera cliente de Prisma
npx prisma db seed   # Inserta datos de prueba
```

---

## 🛠 Solución de Problemas Comunes

### Error: "Cannot find module 'autoprefixer'"
```bash
npm install -D autoprefixer postcss
```

### Error: Turbopack panic
```bash
# En package.json, cambia:
"dev": "next dev"  # Quita el --turbopack
```

### Login no funciona en producción
1. Verifica que las variables de entorno estén configuradas en Vercel
2. Haz un redeploy manual
3. Limpia caché del navegador

### Base de datos no conecta
1. Verifica que `DATABASE_URL` sea correcta
2. Asegúrate que la base de datos acepte conexiones externas
3. Revisa que el usuario tenga permisos

### Docker: Puerto ya en uso
```bash
# Ver qué está usando el puerto
lsof -i :3000  # o :5432 o :5050

# Detener todos los contenedores
docker-compose down

# O cambiar puertos en docker-compose.yml
```

---

## 📝 Notas del Desarrollador

### Decisiones de Diseño

- **Por qué Next.js 15**: App Router, Server Components, mejor performance
- **Por qué Prisma**: Type-safety, migraciones fáciles, excelente DX
- **Por qué validación en servidor**: Seguridad, no se puede bypassear
- **Por qué Docker**: Consistencia, portabilidad, fácil setup

### Estructura de Ramas

- **`main`**: Versión de producción en Vercel
- **`conect_db`**: Implementación de Prisma con migraciones (Nota 2)
- **`docker_deploy`**: Dockerización completa (Nota 3)

### Mejoras Futuras (Roadmap)

- [ ] CRUD completo de proyectos desde el panel admin
- [ ] Autenticación con JWT o NextAuth
- [ ] Subida de imágenes para proyectos
- [ ] Dashboard con estadísticas
- [ ] Sistema de roles (admin, editor, viewer)
- [ ] Rate limiting en API routes
- [ ] Tests unitarios y de integración
- [ ] CI/CD con GitHub Actions

---

## 👨‍💻 Autor

**José** - [GitHub](https://github.com/josecitho)

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

## 🙏 Agradecimientos

- Next.js Team por el excelente framework
- Vercel por el hosting gratuito
- Prisma por el increíble ORM
- Docker por simplificar el despliegue
- Comunidad de desarrolladores

---

**¿Preguntas o problemas?** Abre un issue en GitHub o contacta al desarrollador.

---

Hecho con ❤️ y ☕
