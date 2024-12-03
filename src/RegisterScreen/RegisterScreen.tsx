import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<any>();

  // Validar formato de correo
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (username && email && password && confirmPassword) {
      if (!isValidEmail(email)) {
        Alert.alert('Error', 'Por favor, ingrese un correo válido');
        return;
      }

      if (password === confirmPassword) {
        Alert.alert('Éxito', 'Cuenta creada exitosamente');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'Las contraseñas no coinciden');
      }
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos');
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Text style={styles.title}>COOKME</Text>

      <Text style={styles.label}>USUARIO</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ejemplo: cocinero123"
        placeholderTextColor="#AAA"
        onChangeText={setUsername}
      />

      <Text style={styles.label}>CORREO</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ejemplo: usuario@email.com"
        placeholderTextColor="#AAA"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Text style={styles.label}>CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese una contraseña"
        placeholderTextColor="#AAA"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Text style={styles.label}>CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="Repita la contraseña"
        placeholderTextColor="#AAA"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Crear Cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.loginLink}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
