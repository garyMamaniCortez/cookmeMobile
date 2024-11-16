import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import styles from './styles';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      
      {/* Imagen de perfil */}
      <View style={styles.avatarContainer}>
        <Image 
          source={require('@/assets/icon.png')} 
          style={styles.avatar} 
        />
      </View>

      {/* Nombre de usuario */}
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>NombreUsuario</Text>
        <TouchableOpacity>
          <MaterialIcons name="edit" size={16} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Cuadrícula de botones */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="heart" size={32} color="#333" />
          <Text style={styles.gridText}>Favoritos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="bookmark" size={32} color="#333" />
          <Text style={styles.gridText}>Guardados</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.gridItem}>
          <MaterialIcons name="restaurant-menu" size={32} color="#333" />
          <Text style={styles.gridText}>Mis Recetas</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="settings" size={32} color="#333" />
          <Text style={styles.gridText}>Configuración</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de navegación inferior */}
      <View style={styles.navigation}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#FF007F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;