import * as Camera from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

export default function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log("Permiso:", status);
      setStatus(status);
    })();
  }, []);

  if (status === null) return <Text style={styles.text}>🕒 Pidiendo permiso...</Text>;
  if (status === 'denied') return <Text style={styles.text}>❌ Permiso denegado</Text>;
  if (status === 'granted') return <Text style={styles.text}>✅ Permiso concedido</Text>;

  return null;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100
  }
});
