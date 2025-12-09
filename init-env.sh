#!/bin/bash
set -e

# Crear .env desde .env.example si no existe
if [ ! -f .env ]; then
  echo "Creando .env desde .env.example..."
  cp .env.example .env
  echo ".env creado exitosamente"
else
  echo ".env ya existe"
fi

# Ejecutar el comando pasado
exec "$@"
