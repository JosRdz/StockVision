import gdown
import os

# ID del archivo de Google Drive
file_id = "1t-cbYb03JU6wPxCY0L1zZADdb7-rQyir"
output_dir = "E3ntrenamiento"
os.makedirs(output_dir, exist_ok=True)

# Ruta de salida
output_path = os.path.join(output_dir, "modelo.keras")

# Descargar el archivo
gdown.download(f"https://drive.google.com/uc?id={file_id}", output_path, quiet=False)
