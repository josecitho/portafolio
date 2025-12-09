# Ejecución rápida para evaluación

Este archivo explica cómo el profesor puede levantar la aplicación localmente con un solo comando.

Requisitos
- Docker Desktop instalado y en ejecución
- Git (para clonar el repositorio)

Instrucciones (una línea)

- En Git Bash / Linux / macOS:

```bash
cp .env.example .env && docker-compose -f docker-compose.dev.yml up --build
```

- En PowerShell (Windows):

```powershell
Copy-Item .env.example .env; docker-compose up --build
```

Scripts incluidos
- `start-demo.sh`: para entornos Unix / Git Bash. Ejecuta `./start-demo.sh`.
- `start-demo.ps1`: para PowerShell en Windows. Ejecuta `.\start-demo.ps1`.

Comportamiento de los scripts
- Ambos scripts crean `./.env` a partir de `./.env.example` sólo si no existe (no sobrescriben),
  y luego ejecutan `docker-compose up --build`.

Notas de seguridad
- `./.env` está en `.gitignore` y no debe subirse al repositorio.
- Para producción, configura variables de entorno en el servicio/CI en lugar de usar archivos `.env`.
