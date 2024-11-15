import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COOKME</Text>
      <Image source={require('./assets/mouse.jpg')} style={styles.image} />
      
      <Text style={styles.label}>USUARIO</Text>
      <TextInput style={styles.input} placeholder="Ingrese su usuario" />

      <Text style={styles.label}>CONTRASEÑA</Text>
      <TextInput style={styles.input} placeholder="Ingrese su contraseña" secureTextEntry />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>OLVIDE LA CONTRASEÑA</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.register}>Registrarse</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}
export default LoginScreen;
