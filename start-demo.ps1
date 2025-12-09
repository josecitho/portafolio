$ErrorActionPreference = 'Stop'
# Crear .env desde .env.example si no existe
if (-not (Test-Path -Path .env)) {
  Copy-Item -Path .env.example -Destination .env
}
# Levantar servicios (modo desarrollo)
docker-compose -f docker-compose.dev.yml up --build
