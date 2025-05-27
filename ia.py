import cv2
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Ruta fija del modelo (corrigiendo barras para Windows)
modelo = load_model("Entrenamiento/modelo.keras")
print("Modelo cargado correctamente")

# IP fija de la cámara IP
URL_CÁMARA_IP = "http://210.209.189.13:8080/video"

def detectar_robo(img_path, model):
    """Detecta posible robo en una imagen."""
    img = image.load_img(img_path, target_size=(128,128))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_array)[0][0]

    if prediction > 0.9:  # Ajusta el umbral si hay muchas falsas alarmas
        print("Alerta: Posible robo detectado!")
    else:
        print("Comportamiento normal")

def detectar_robo_frame(frame, model):
    """Detecta actividad sospechosa en un frame de video."""
    img_array = cv2.resize(frame, (128,128)) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    prediction = model.predict(img_array)[0][0]
    return prediction > 0.9  # Ajusta el umbral aquí también

def iniciar_camara():
    """Captura video en tiempo real desde webcam y detecta robos."""
    cap = cv2.VideoCapture(0)
    
    if not cap.isOpened():
        print("Error: No se pudo acceder a la webcam")
        return

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if detectar_robo_frame(frame, modelo):
            cv2.putText(frame, "Robo Detectado!", (10,50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255), 2)

        cv2.imshow("Cámara", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

def iniciar_camara_ip():
    """Captura video desde una cámara IP y detecta robos."""
    cap = cv2.VideoCapture(URL_CÁMARA_IP)

    if not cap.isOpened():
        print(f"Error: No se pudo conectar a la cámara IP ({URL_CÁMARA_IP})")
        return

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if detectar_robo_frame(frame, modelo):
            cv2.putText(frame, "Robo Detectado!", (10,50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255), 2)

        cv2.imshow("Cámara IP", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    print("Detectar robo en una imagen")
    print("Activar cámara en tiempo real")
    print("Activar cámara IP")
    opcion = input("Elige una opción: ")

    if opcion == "1":
        img_path = input("Introduce la ruta de la imagen: ")
        detectar_robo(img_path, modelo)
    elif opcion == "2":
        iniciar_camara()
    elif opcion == "3":
        iniciar_camara_ip()
    else:
        print("❌ Opción inválida, intenta de nuevo.")
