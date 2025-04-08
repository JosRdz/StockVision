import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera, CameraType, useCameraPermissions } from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.back);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      if (!permission?.granted) {
        await requestPermission();
      }
      await tf.ready(); // Inicializar TensorFlow
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Foto capturada:', photo);
    }
  };

  const toggleCameraType = () => {
    setCameraType((prev) =>
      prev === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  if (!permission) return <View />;
  if (!permission.granted)
    return <Text>No tienes permisos para usar la cámara.</Text>;

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
      >
        <View style={styles.buttonContainer}>
          <Button title="Tomar Foto" onPress={takePicture} />
          <Button title="Cambiar Cámara" onPress={toggleCameraType} />
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
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
  },
});
