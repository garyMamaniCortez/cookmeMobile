import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { UsuarioLogin } from '@/interfaces/api/User';
import { useLogin } from '@/hooks/useUsuario';
import { updateGlobals } from '@/constants/global';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleSubmit = async() => {
    if(email && password){
      const user: UsuarioLogin = {email, password};
      const {usuario, error} = await useLogin(user);
      if(error){
        alert(error)
      }else{
        updateGlobals(usuario!);
        navigation.navigate('Home');
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Text style={styles.title}>COOKME</Text>
      <Image source={require('@/assets/mouse.jpg')} style={styles.image} />
      
      <Text style={styles.label}>EMAIL</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese su Email"
        onChangeText={setEmail}
        />

      <Text style={styles.label}>CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ingrese su contraseña"
        onChangeText={setPassword}
        secureTextEntry />

      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>

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
