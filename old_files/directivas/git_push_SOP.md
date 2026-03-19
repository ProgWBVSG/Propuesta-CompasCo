# SOP: Despliegue en GitHub

## Objetivo
Sincronizar el repositorio local con el repositorio remoto en GitHub.

## Entradas
- Repositorio remoto: `https://github.com/ProgWBVSG/Propuesta-CompasCo`
- Archivos locales (filtrados por `.gitignore`)

## Lógica y Pasos
1. **Configuración de Ambiente:** Asegurar que existe un `.gitignore` válido.
2. **Ejecución del Script:** Ejecutar `scripts/git_push.py`.
3. **Mecanismo de Git:**
   - `git init` (si no existe).
   - `git add .` para incluir archivos de propuesta y automatización.
   - `git commit` con mensaje descriptivo.
   - `git remote add origin` vinculando la URL proporcionada.
   - `git push -u origin main`.

## Advertencias / Trampas Conocidas
- **Autenticación:** Si el usuario no tiene una sesión activa de GitHub o un token configurado en su git local, el comando `git push` fallará.
- **Rama Principal:** El script fuerza el nombre de la rama a `main`.
- **Repositorios No Vacíos:** Si el repo en GitHub ya tiene archivos (como un README), el push puede requerir un `pull` previo o ser forzado. El script actual asume un repo nuevo/vacío.
