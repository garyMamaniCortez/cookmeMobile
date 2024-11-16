import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { Navbar } from '@/components';

const ProfileScreen: React.FC = () => {
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
        <TouchableOpacity>
          <Text style={styles.username}>
            Nombre Usuario
            <MaterialIcons name="edit" size={20} color="#1D1B20" />
          </Text>
        </TouchableOpacity>
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
};

export default ProfileScreen;
