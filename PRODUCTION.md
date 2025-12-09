# Despliegue en Producción

Esta guía explica cómo desplegar el portafolio en un entorno de producción de forma segura usando Docker, GitHub Actions y un servicio gestionado de base de datos.

## Tabla de Contenidos

- [Arquitectura](#arquitectura)
- [Requisitos Previos](#requisitos-previos)
- [Configuración de Secretos en GitHub](#configuración-de-secretos-en-github)
- [Variables de Entorno (Producción)](#variables-de-entorno-producción)
- [CI/CD con GitHub Actions](#cicd-con-github-actions)
- [Despliegue de la Aplicación](#despliegue-de-la-aplicación)
- [Base de Datos en Producción](#base-de-datos-en-producción)
- [Seguridad](#seguridad)
- [Monitoreo y Logs](#monitoreo-y-logs)

---

## Arquitectura

```
┌─────────────────────────────────────────────────┐
│          GitHub Repository (main)                │
│  (push) ──────────────────────────────────────┐ │
└─────────────────────────────────────────────────┘
                                                    │
                                                    ▼
                        ┌──────────────────────────────────┐
                        │  GitHub Actions Workflow (CI)    │
                        ├──────────────────────────────────┤
                        │ 1. Build image                   │
                        │ 2. Push to registry              │
                        │ 3. Run migrations                │
                        │ 4. Deploy (manual trigger)       │
                        └──────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
            ┌─────────────┐  ┌────────────┐  ┌──────────┐
            │  Container  │  │  Managed   │  │ Secrets  │
            │  Registry   │  │  Postgres  │  │ Manager  │
            └─────────────┘  └────────────┘  └──────────┘
                    │               │
                    └───────────────┼───────────────┐
                                    ▼               ▼
                        ┌──────────────────────────────────┐
                        │   Production Host / Cloud        │
                        │  (Docker / Kubernetes / ECS)     │
                        │                                  │
                        │  App Container (Next.js)         │
                        │  Port: 3000 (behind proxy)       │
                        └──────────────────────────────────┘
                                    │
                                    ▼
                        ┌──────────────────────────────────┐
                        │  Reverse Proxy (Nginx/Traefik)   │
                        │  - HTTPS / TLS (Let's Encrypt)   │
                        │  - Port 443 → App                │
                        │  - Routing / Load Balancing      │
                        └──────────────────────────────────┘
```

---

## Requisitos Previos

- Cuenta en GitHub
- Acceso a un servicio de base de datos administrado (RDS, Cloud SQL, Render, Supabase, etc.)
- Acceso a un registry de Docker (GitHub Container Registry, Docker Hub, private registry, etc.)
- Un host para ejecutar contenedores (VPS, Cloud Run, ECS, Kubernetes, etc.)
- Dominio propio (opcional, pero recomendado)

---

## Configuración de Secretos en GitHub

Para que el workflow de CI funcione, debes añadir los siguientes secretos en tu repositorio:

1. Ve a **Settings → Secrets and variables → Actions**
2. Haz clic en **New repository secret** y añade cada uno:

### Secretos Requeridos

| Nombre | Descripción | Ejemplo |
|--------|-------------|---------|
| `REGISTRY_HOST` | Host del registry Docker | `ghcr.io` (GitHub Container Registry) |
| `DOCKER_USERNAME` | Usuario del registry | Tu usuario de GitHub |
| `DOCKER_PASSWORD` | Token / contraseña del registry | Token de GitHub PAT |
| `DATABASE_URL` | URL de conexión a la BD producción | `postgresql://user:pass@host:5432/db` |
| `ADMIN_EMAIL` | Email del administrador | `admin@tuportafolio.com` |
| `ADMIN_PASSWORD` | Contraseña del administrador (fuerte) | `SuperSecurePassword123!` |

### Cómo Obtener DOCKER_PASSWORD (si usas GitHub Container Registry)

1. Ve a https://github.com/settings/tokens
2. Click en **Generate new token (classic)**
3. Marca `write:packages` y `read:packages`
4. Copia el token y guárdalo en GitHub Secrets como `DOCKER_PASSWORD`

---

## Variables de Entorno (Producción)

La app en producción requiere estas variables de entorno:

```bash
DATABASE_URL=postgresql://user:password@host:port/dbname
NODE_ENV=production
ADMIN_EMAIL=admin@tuportafolio.com
ADMIN_PASSWORD=secure_password_here
```

**Importante:** Estos valores NO deben estar en el repo. Se proveen a través de:
- Secretos de GitHub (en el workflow)
- Variables de entorno en el host de ejecución
- Secret Manager del cloud provider (AWS Secrets Manager, Azure Key Vault, etc.)

---

## CI/CD con GitHub Actions

El workflow en `.github/workflows/ci.yml` automatiza:

1. **Build**: Construye la imagen Docker
2. **Push**: Sube la imagen al registry
3. **Migrate**: Ejecuta migraciones de Prisma contra la BD de producción
4. **Deploy** (opcional): Despliega la aplicación

### Ejecución Automática

El workflow se dispara automáticamente en cada push a `main`. Monitoriza el estado en **Actions** tab de tu repo.

### Pasos del Workflow

```yaml
1. Checkout del código
2. Setup Node.js
3. npm ci (instalar dependencias)
4. npm test (si lo tienes configurado)
5. npx prisma generate (generar cliente Prisma)
6. Login a registry (usando secretos)
7. Build & Push image
8. Run migrations (npx prisma migrate deploy)
9. Deploy (paso manual, requiere configuración adicional)
```

### Ver Logs del Workflow

1. Ve a **Actions** en tu repositorio
2. Haz clic en el último workflow ejecutado
3. Revisa los detalles de cada step

Si hay errores (ej. faltan secretos), verás mensajes claros en los logs.

---

## Despliegue de la Aplicación

### Opción 1: Docker Compose en tu propio VPS

1. **SSH a tu servidor:**
```bash
ssh user@tu-servidor.com
```

2. **Clone el repositorio:**
```bash
git clone https://github.com/tu-user/portafolio.git
cd portafolio
```

3. **Configura las variables de entorno:**
```bash
cat > .env << EOF
DATABASE_URL=postgresql://user:pass@db-host:5432/db
ADMIN_EMAIL=admin@tuportafolio.com
ADMIN_PASSWORD=secure_pass
EOF
```

4. **Levanta la aplicación (usando docker-compose.prod.yml):**
```bash
# Pull la imagen más reciente del registry
docker-compose -f docker-compose.prod.yml pull

# Levanta el servicio
docker-compose -f docker-compose.prod.yml up -d

# Verifica status
docker-compose -f docker-compose.prod.yml ps
```

5. **Configura Nginx/Reverse Proxy con HTTPS** (fuera de este archivo; referencia: Certbot + Let's Encrypt)

### Opción 2: Cloud Run (Google Cloud)

```bash
gcloud run deploy portafolio \
  --image gcr.io/tu-proyecto/portafolio:latest \
  --platform managed \
  --region us-central1 \
  --set-env-vars DATABASE_URL="postgresql://..." \
  --allow-unauthenticated
```

### Opción 3: Vercel (Frontend) + Managed Postgres

1. **Conecta tu repo a Vercel:** https://vercel.com/new
2. **Configura variables de entorno en Vercel Dashboard:**
   - `DATABASE_URL`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
3. **Deploy automático:** Vercel despliega en cada push a `main`

---

## Base de Datos en Producción

### Recommended: Managed PostgreSQL

- **RDS (AWS):** https://aws.amazon.com/rds/
- **Cloud SQL (Google Cloud):** https://cloud.google.com/sql
- **Supabase:** https://supabase.com/
- **Render:** https://render.com/
- **Railway:** https://railway.app/

### Ventajas

- ✅ Backups automáticos
- ✅ Alta disponibilidad
- ✅ Monitoreo y alertas
- ✅ Sin necesidad de gestionar infra

### Crear Conexión

```bash
# Ejemplo: conectar desde local para ejecutar migraciones iniciales
export DATABASE_URL="postgresql://user:pass@remote-host:5432/dbname"
npx prisma db push
npx prisma migrate deploy
```

---

## Seguridad

### Checklist de Seguridad

- [ ] No expongas la BD públicamente (usa redes privadas si es posible)
- [ ] Usa contraseñas fuertes y rotarlas regularmente
- [ ] Almacena secretos en GitHub Secrets (no en el repo)
- [ ] Usa HTTPS / TLS en todos los endpoints públicos
- [ ] Configura un reverse proxy (Nginx/Traefik) frente a la app
- [ ] Limita acceso SSH a IPs específicas
- [ ] Actualiza dependencias regularmente (`npm audit fix`)
- [ ] Revisa logs regularmente
- [ ] Configura backups automáticos para la BD
- [ ] Usa variables de entorno para todas las credenciales

### Ejemplo Nginx Config (HTTPS)

```nginx
server {
    listen 80;
    server_name tudominio.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name tudominio.com;
    
    ssl_certificate /etc/letsencrypt/live/tudominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tudominio.com/privkey.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## Monitoreo y Logs

### Logs de la Aplicación

```bash
# Ver logs en tiempo real
docker-compose -f docker-compose.prod.yml logs -f app

# Ver logs históricos
docker-compose -f docker-compose.prod.yml logs app --tail 100
```

### Health Check

Configura un script para monitorear la disponibilidad:

```bash
#!/bin/bash
curl -f http://localhost:3000/health || exit 1
```

### Integración con Sentry (Error Tracking)

1. Crea cuenta en https://sentry.io/
2. Obtén el `SENTRY_DSN`
3. Añade a `.env`: `SENTRY_DSN=https://...`
4. Integra en tu código (opcional para este proyecto)

---

## Rollback en Caso de Error

```bash
# Si la nueva imagen causa problemas, vuelve a la anterior
docker-compose -f docker-compose.prod.yml down
docker pull tu-registry/portafolio:previous-tag
docker-compose -f docker-compose.prod.yml up -d
```

---

## Comandos Útiles (Producción)

```bash
# Mostrar logs
docker-compose -f docker-compose.prod.yml logs -f

# Ejecutar migraciones manualmente
docker-compose -f docker-compose.prod.yml exec app npx prisma migrate deploy

# Abrir una sesión en el contenedor
docker-compose -f docker-compose.prod.yml exec app sh

# Reiniciar la app
docker-compose -f docker-compose.prod.yml restart app

# Detener todo
docker-compose -f docker-compose.prod.yml down
```

---

## Soporte y Troubleshooting

### Problema: Workflow falla en "Build and Push"
**Solución:** Verifica que los secretos `REGISTRY_HOST`, `DOCKER_USERNAME`, `DOCKER_PASSWORD` estén configurados correctamente.

### Problema: Migraciones fallan
**Solución:** Asegúrate de que `DATABASE_URL` es válida y la DB es accesible desde GitHub Actions.

### Problema: App se reinicia constantemente
**Solución:** Revisa los logs del contenedor (`docker logs portafolio-app`) y verifica las variables de entorno.

---

**Última actualización:** 9 de diciembre de 2025
