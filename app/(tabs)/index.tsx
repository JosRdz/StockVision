import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export default function App() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null); // Uso explícito de tipos
  const cameraRef = useRef<Camera | null>(null); // Declaramos el tipo correcto de ref

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted'); // Configuramos los permisos de cámara
      await tf.ready(); // Inicializamos TensorFlow
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      // Procesamiento adicional de la imagen (puedes usar TensorFlow aquí)
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No se puede acceder a la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(ref) => {
          cameraRef.current = ref;
        }}
      >
        <View style={styles.buttonContainer}>
          <Button title="Tomar Foto" onPress={takePicture} />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
