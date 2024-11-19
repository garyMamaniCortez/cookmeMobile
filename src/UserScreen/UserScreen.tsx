import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { Navbar } from '@/components';
import { useUpdateUsuario, useUserResponseToRequest, useUsuario } from '@/hooks/useUsuario';
import { UsuarioResponse } from '@/interfaces/api/User';
import ErrorScreen from '../ErrorScreen/ErrorScreen';

const ProfileScreen: React.FC = () => {

  const { data, error } = useUsuario(1);
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
          <TouchableOpacity style={styles.gridItem}>
            <Ionicons name="heart" size={32} color="1D1B20" />
            <Text 
              style={styles.gridText} 
              adjustsFontSizeToFit 
              numberOfLines={1}
            >
              Favoritos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.gridItem}>
            <Ionicons name="bookmark" size={32} color="1D1B20" />
            <Text 
              style={styles.gridText} 
              adjustsFontSizeToFit 
              numberOfLines={1}
            >
              Guardados
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.gridItem}>
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
