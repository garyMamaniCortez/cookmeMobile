import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleRegister = () => {
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert('Cuenta creada exitosamente');
        navigation.navigate('Login');
      } else {
        alert('Las contraseñas no coinciden');
      }
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Text style={styles.title}>COOKME</Text>

      <Text style={styles.label}>INGRESE SU USUARIO</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese su usuario"
        onChangeText={setUsername}
      />

      <Text style={styles.label}>INGRESE UN CORREO</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese un correo"
        onChangeText={setEmail}
      />

      <Text style={styles.label}>INGRESE UNA CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese una contraseña"
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.label}>REPITA LA CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="Repita la contraseña"
        onChangeText={setConfirmPassword}
        secureTextEntry
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
