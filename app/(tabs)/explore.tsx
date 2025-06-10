import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ExploreScreen() {
  const [modalContent, setModalContent] = useState<'config' | null>(null);

  const openConfig = () => {
    setModalContent('config');
  };

  return (
    <LinearGradient colors={['#FF944D', '#FF6F61']} style={styles.container}>
      {/* Modal de Configuración con Ayuda integrada */}
      <Modal
        visible={modalContent !== null}
        animationType="slide"
        onRequestClose={() => setModalContent(null)}
      >
        <LinearGradient colors={['#FF944D', '#FF6F61']} style={styles.modalContent}>
          {modalContent === 'config' && (
            <>
              {/* Sección de Configuración */}
              <Text style={styles.title}>Configuración</Text>
              <Text style={styles.modalText}>
                Aquí puedes ajustar opciones como notificaciones, cuenta, etc.
              </Text>

              {/* Sección de Ayuda justo debajo */}
              <Text style={styles.title}>Ayuda</Text>
              <Text style={styles.modalText}>
                Información para usuarios y contacto de soporte.
              </Text>

              {/* Botón para cerrar */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalContent(null)}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </>
          )}
        </LinearGradient>
      </Modal>

      {/* Barra inferior con íconos */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <Icon name="clock" size={24} color="#FFFFFF" />
          <Text style={styles.bottomButtonText}>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Icon name="camera" size={24} color="#FFFFFF" />
          <Text style={styles.bottomButtonText}>Cámaras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Icon name="alert-circle" size={24} color="#FFFFFF" />
          <Text style={styles.bottomButtonText}>Reporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={openConfig}>
          <Icon name="menu" size={24} color="#FFFFFF" />
          <Text style={styles.bottomButtonText}>Menú</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// Define the styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#FF6F61',
    fontWeight: 'bold',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FF944D',
    width: '100%',
    paddingVertical: 10,
  },
  bottomButton: {
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 5,
  },
});