#!/usr/bin/env bash
set -e

# Crear .env desde .env.example si no existe (no sobrescribe)
if [ ! -f .env ]; then
  cp .env.example .env
  echo ".env creado desde .env.example"
fi

# Levantar servicios (modo desarrollo)
echo "Levantando aplicación..."
docker-compose -f docker-compose.dev.yml up --build
