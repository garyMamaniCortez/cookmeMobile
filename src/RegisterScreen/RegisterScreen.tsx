import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { usePostUsuario } from '@/hooks/useUsuario';
import { UsuarioRequest } from '@/interfaces/api/User';
import { updateGlobals } from '@/constants/global';

const RegisterScreen: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<any>();

  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex: RegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'-]{2,}(?: [a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'-]+)*$/;

  const isValidEmail = (email: string): boolean => emailRegex.test(email);
  const isValidName = (name: string): boolean => nameRegex.test(name);

  const handleRegister = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (!isValidName(nombre)) {
      Alert.alert('Error', 'Por favor, introduce un nombre válido.');
      return;
    }

    if (!isValidName(apellido)) {
      Alert.alert('Error', 'Por favor, introduce un apellido válido.');
      return;
    }

    if (!usuario || usuario.trim() === '') {
      Alert.alert('Error', 'Por favor, introduce un nombre de usuario válido.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    // Creación del nuevo usuario
    const newUsuario: UsuarioRequest = {
      nombre_usuario: usuario.trim(),
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    try {
      const { usuario: data, error } = await usePostUsuario(newUsuario);

      if (error) {
        Alert.alert('Error', error);
      } else {
        Alert.alert('Éxito', 'Usuario registrado con éxito.');
        updateGlobals(data!);
        navigation.navigate('Home');
      }
    } catch (err) {
      Alert.alert('Error', 'Ocurrió un problema durante el registro.');
    }
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
