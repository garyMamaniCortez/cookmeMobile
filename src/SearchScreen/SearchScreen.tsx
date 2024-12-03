import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { Navbar, RecipeCard } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';
import { useRecetas } from '@/hooks/useReceta';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import styles from './styles';

const SearchScreen: React.FC = () => {
  const {data, error} = useRecetas();

  if(data)
    return (
      <>
        <LinearGradient
          colors={['transparent', '#FB8B24']} // Fondo degradado de arriba hacia abajo
          style={styles.container}
        >
          <StatusBar style="dark" backgroundColor="transparent" translucent={false} />

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchBar}
              placeholder="Busqueda"
              placeholderTextColor="#AAA" />
          </View>

          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* Smaller cards (with first card as button) */}
            <View style={styles.grid}>
              {/*Cards */}
              {data.map((receta) => (
                <RecipeCard key={receta.id_receta.toString()} receta={receta} />
              ))}
            </View>
          </ScrollView>
        </LinearGradient>
        <Navbar />
      </>
    );
  else
    return (
      <ErrorScreen error={error!} />
    );
};

export default SearchScreen;
