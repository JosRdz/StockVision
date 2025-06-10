import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReportScreen() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    Alert.alert('Reporte enviado', `Descripción: ${description}\nUbicación: ${location}`);
    setDescription('');
    setLocation('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <TextInput
        style={styles.input}
        placeholder="Descripción del incidente"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Enviar reporte" onPress={handleSubmit} color="#ff7f00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF944D',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});
