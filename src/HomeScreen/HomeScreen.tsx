import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Navbar, RecipeCard } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';
import { useRecetas } from '@/hooks/useReceta';
import ErrorScreen from '../ErrorScreen/ErrorScreen';

const HomeScreen: React.FC = () => {
  const {data, error} = useRecetas();
  const navigation = useNavigation<any>();

  const goToRecipe = (id_receta : number) => {
    navigation.navigate('Recipe', { id_receta});
  };

  if(data)
    return (
      <><LinearGradient
        colors={['transparent', '#9C4C16']} // Fondo degradado de arriba hacia abajo
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
          {/* Main card */}
          <TouchableOpacity style={styles.mainCard} onPress={() => goToRecipe(data[0].id_receta)} key={data[0].id_receta.toString()}>
            <Image
              source={{
                uri: data[0].imagen ||'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0',
              }}
              style={styles.mainCardImage} />
            <Text style={styles.cardTitle}>{data[0].nombre_receta}</Text>
            <View style={styles.cardStars}>
              {Array(data[0].promedio_valoracion? Math.round(data[0].promedio_valoracion) : 5)
                .fill(null)
                .map((_, index) => (
                  <Ionicons key={index} name="star" size={20} color="#FFD700" />
                ))}
            </View>
          </TouchableOpacity>

          {/* Smaller cards (with first card as button) */}
          <View style={styles.grid}>
            {/* Additional cards */}
            {data.slice(1).map((receta) => (
                <RecipeCard key={receta.id_receta.toString()} receta={receta} />
            ))}
          </View>
        </ScrollView>
      </LinearGradient><Navbar /></>
    );
  else
    return (
      <ErrorScreen error={error!} />
    );
};

export default HomeScreen;
