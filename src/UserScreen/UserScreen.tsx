import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { Navbar } from '@/components';
import { useUpdateUsuario, useUserResponseToRequest, useUsuario } from '@/hooks/useUsuario';
import { UsuarioResponse } from '@/interfaces/api/User';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { Globals } from '@/constants/global';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {

  const navigation = useNavigation<any>();
  const { data, error } = useUsuario(Globals.id_usuario);
  const [ user, setUser ] = useState<UsuarioResponse| null>(null);
  const [editedUsername, setEditedUsername] = useState('');
  useEffect(() => {
    setUser(data);
  })

  const handleSaveName = async () => {
    // Update the usuario object with the edited username
    const updatedUsuario = { ...user!, nombre_usuario: editedUsername };
    const usuarioResquest = useUserResponseToRequest(updatedUsuario)
    // Call useUpdateUsuario to update the database
    const {usuario, error } = await useUpdateUsuario(updatedUsuario.id_usuario, usuarioResquest);
    setUser(usuario);
  };

  const goToMyRecipes = () => {
    if (Globals.email)
      navigation.navigate('MyRecipes');
    else{
      Alert.alert(
        "Sesión requerida",
        "Necesitas iniciar sesión para continuar.",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Ir a Login",
            onPress: () => navigation.navigate('Login'),
          },
        ],
        { cancelable: false }
      );
    }
  }

  const goToFavorites = () => {
    if (Globals.email){

    }
    else{
      Alert.alert(
        "Sesión requerida",
        "Necesitas iniciar sesión para continuar.",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Ir a Login",
            onPress: () => navigation.navigate('Login'),
          },
        ],
        { cancelable: false }
      );
    }
  }
  const goToSaves = () => {
    if (Globals.email){
      
    }
    else{
      Alert.alert(
        "Sesión requerida",
        "Necesitas iniciar sesión para continuar.",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Ir a Login",
            onPress: () => navigation.navigate('Login'),
          },
        ],
        { cancelable: false }
      );
    }
  }

  if(user){
    return (
      <LinearGradient
          colors={['transparent', '#7B0D44']}
          style={styles.background}
      >
  
        {/* Imagen de perfil */}
        <View style={styles.avatarContainer}>
          <Image 
            source={require('@/assets/mouse.jpg')} 
            style={styles.avatar} 
          />
        </View>
  
        {/* Nombre de usuario */}
        <View style={styles.usernameContainer}>
            <TextInput
              style={styles.username}
              value={editedUsername}
              onChangeText={setEditedUsername}
              onSubmitEditing={handleSaveName}
              placeholder={user.nombre_usuario}
            />
            <MaterialIcons name="edit" size={20} color="#1D1B20" />
        </View>
  
        {/* Cuadrícula de botones */}
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem} onPress={goToFavorites}>
            <Ionicons name="heart" size={32} color="1D1B20" />
            <Text 
              style={styles.gridText} 
              adjustsFontSizeToFit 
              numberOfLines={1}
            >
              Favoritos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.gridItem} onPress={goToSaves}>
            <Ionicons name="bookmark" size={32} color="1D1B20" />
            <Text 
              style={styles.gridText} 
              adjustsFontSizeToFit 
              numberOfLines={1}
            >
              Guardados
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.gridItem} onPress={goToMyRecipes}>
            <MaterialIcons name="restaurant-menu" size={32} color="#1D1B20" />
            <Text 
              style={styles.gridText} 
              adjustsFontSizeToFit 
              numberOfLines={1}
            >
              Mis Recetas
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.gridItem}>
            <Ionicons name="settings" size={32} color="#1D1B20" />
            <Text 
              style={styles.gridText} 
              adjustsFontSizeToFit 
              numberOfLines={1}
            >
              Configuración
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Barra de navegación inferior */}
        <Navbar />
      </LinearGradient>
  
    );
  } else {
    return(
      <ErrorScreen error={error!}></ErrorScreen>
    );
  }
};

export default ProfileScreen;
