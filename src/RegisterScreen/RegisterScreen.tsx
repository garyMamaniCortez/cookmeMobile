import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleRegister = () => {
    if (!email.includes('@')) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Aquí puedes manejar la lógica para registrar al usuario
    alert('Usuario registrado con éxito.');
  };

  const goToLogin = () => {
    navigation.navigate('Login'); // Redirige a la ventana de Login
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Text style={styles.title}>COOKME</Text>

      {/* Campo de usuario */}
      <Text style={styles.label}>USUARIO</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese su Usuario"
        onChangeText={setUsuario}
      />

      {/* Campo de nombre */}
      <Text style={styles.label}>NOMBRE</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese su Nombre"
        onChangeText={setNombre}
      />

      {/* Campo de apellido */}
      <Text style={styles.label}>APELLIDO</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese su Apellido"
        onChangeText={setApellido}
      />

      {/* Campo de correo */}
      <Text style={styles.label}>CORREO</Text>
      <TextInput 
        style={styles.input}
        placeholder="ejemplo@correo.com"
        onChangeText={setEmail}
      />

      {/* Campo de contraseña */}
      <Text style={styles.label}>CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese una contraseña"
        secureTextEntry
        onChangeText={setPassword}
      />

      {/* Campo para repetir la contraseña */}
      <Text style={styles.label}>CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="Repita la contraseña"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      {/* Botón Crear Cuenta */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Crear Cuenta</Text>
      </TouchableOpacity>

      {/* Enlace para iniciar sesión */}
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.loginLink}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
