import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AlertList() {
  return (
    <View style={styles.panel}>
      <Text style={styles.label}>Alertas recientes</Text>
      <Text>🛑 Movimiento sospechoso en pasillo 3</Text>
      <Text>🚨 Producto faltante en estante A2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    padding: 10,
    borderLeftWidth: 6,
    borderLeftColor: '#FF6B00',
    marginBottom: 15,
    borderRadius: 8,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
    color: '#FF6B00',
  },
});
