import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Pantalla principal */}
      <Text style={styles.title}>Seguridad en Tiendas</Text>
      <Button title="Ver Cámaras" onPress={() => alert('Accediendo a cámaras')} />
      <Button title="Ver Reportes" onPress={() => alert('Accediendo a reportes')} />
      <Button title="Configuración" onPress={() => alert('Accediendo a configuración')} />

      {/* Ejemplo de sección de reportes */}
      <View style={styles.reportSection}>
        <Text style={styles.subtitle}>Reportes Recientes</Text>
        <FlatList
          data={[
            { key: 'Robo detectado en el pasillo 3' },
            { key: 'Actividad sospechosa cerca de la entrada' },
            { key: 'Empleado no autorizado en área restringida' },
          ]}
          renderItem={({ item }) => <Text style={styles.reportItem}>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  reportSection: {
    marginTop: 30,
    width: '90%',
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 10,
  },
  reportItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
