$ErrorActionPreference = 'Stop'

# Crear .env desde .env.example si no existe
if (-not (Test-Path -Path .env)) {
  Copy-Item -Path .env.example -Destination .env
  Write-Host ".env creado desde .env.example"
}

# Levantar servicios (modo desarrollo)
Write-Host "Levantando aplicación..."
docker-compose -f docker-compose.dev.yml up --build
