import { Image, StyleSheet, Text, View } from 'react-native';

export default function CameraView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cámara Principal</Text>
      <Image
        source={{ uri: 'https://i.imgur.com/b7p3h5M.gif' }}
        style={styles.camera}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 6,
    borderLeftColor: '#FF6B00',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FF6B00',
  },
  camera: {
    width: '100%',
    height: 220,
    borderRadius: 8,
  },
});
