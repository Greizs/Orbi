import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  useEffect(() => {
    // Mantener el splash screen visible mientras se carga la app
    SplashScreen.preventAutoHideAsync();

    // Simulación de carga (puedes reemplazar esto con la lógica de carga real)
    setTimeout(async () => {
      await SplashScreen.hideAsync(); // Ocultar el splash screen cuando esté listo
    }, 2000); // 2 segundos de espera (ajusta el tiempo según tus necesidades)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text variant="displayLarge" style={styles.title}>
          Bienvenido al asistente de visión
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          icon="camera"
          onPress={() => console.log('Button Pressed')}
          style={styles.button}
        >
          Abrir cámara
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    marginVertical: 10,
  },
});
