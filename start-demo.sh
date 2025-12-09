#!/usr/bin/env bash
set -e
# Crear .env desde .env.example si no existe (no sobrescribe)
cp .env.example .env 2>/dev/null || true
# Levantar servicios (modo desarrollo)
docker-compose -f docker-compose.dev.yml up --build
