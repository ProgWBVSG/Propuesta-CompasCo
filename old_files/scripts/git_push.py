import subprocess
import os
import sys

def run_command(command):
    print(f"Ejecutando: {' '.join(command)}")
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
        return False
    print(result.stdout)
    return True

def git_init_and_push(repo_url):
    # Initialize git if not already initialized
    if not os.path.exists(".git"):
        if not run_command(["git", "init"]):
            return

    # Add all files
    if not run_command(["git", "add", "."]):
        return

    # Commit
    if not run_command(["git", "commit", "-m", "Initial commit: Propuesta CompasCo"]):
        # If nothing to commit, it's fine
        pass

    # Rename branch to main
    run_command(["git", "branch", "-M", "main"])

    # Add remote (remove if exists)
    subprocess.run(["git", "remote", "remove", "origin"], capture_output=True)
    if not run_command(["git", "remote", "add", "origin", repo_url]):
        return

    # Push
    print("Intentando hacer push a GitHub...")
    if not run_command(["git", "push", "-u", "origin", "main"]):
        print("\nAVISO: El push falló. Esto puede deberse a falta de permisos o necesidad de autenticación interactiva.")
        print("Asegúrate de tener configurado tu token de GitHub o SSH key.")
        sys.exit(1)

if __name__ == "__main__":
    REPO = "https://github.com/ProgWBVSG/Propuesta-CompasCo"
    git_init_and_push(REPO)
