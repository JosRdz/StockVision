import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CameraType, requestCameraPermissionsAsync } from 'expo-camera';
import { Camera } from 'expo-camera/Camera'; // 👈 Importación correcta del componente
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export default function App() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>('back');
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      await tf.ready(); // Inicializa TensorFlow
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo); // Aquí puedes enviar la foto a TensorFlow
    }
  };

  const toggleCameraType = () => {
    setCameraType((prevType) =>
      prevType === 'back' ? 'front' : 'back'
    );
  };

  if (hasPermission === null) return <View />;
  if (hasPermission === false)
    return <Text>No se puede acceder a la cámara</Text>;

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
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
