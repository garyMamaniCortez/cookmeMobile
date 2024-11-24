import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Navbar } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const goToRecipe = () => {
    navigation.navigate('RecipeScreen', { id_receta: 1 }); // Navega a RecipeScreen
  };

  const renderCard = () => (
    <TouchableOpacity style={styles.card} onPress={goToRecipe}>
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0',
        }}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>Tacos al pastor</Text>
      <View style={styles.cardStars}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Ionicons key={index} name="star" size={16} color="#FFD700" />
          ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <><LinearGradient
      colors={['#F5EFED', '#9C4C16']} // Fondo degradado de arriba hacia abajo
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
        <TouchableOpacity style={styles.mainCard} onPress={goToRecipe}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0',
            }}
            style={styles.mainCardImage} />
          <Text style={styles.cardTitle}>Tacos al pastor</Text>
          <View style={styles.cardStars}>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Ionicons key={index} name="star" size={20} color="#FFD700" />
              ))}
          </View>
        </TouchableOpacity>

        {/* Smaller cards (with first card as button) */}
        <View style={styles.grid}>
          <TouchableOpacity style={styles.card} onPress={goToRecipe}>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0',
              }}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Tacos al pastor</Text>
            <View style={styles.cardStars}>
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <Ionicons key={index} name="star" size={16} color="#FFD700" />
                ))}
            </View>
          </TouchableOpacity>

          {/* Additional cards */}
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <React.Fragment key={index}>{renderCard()}</React.Fragment>
            ))}

        </View>
      </ScrollView>
    </LinearGradient><Navbar /></>
  );
};

export default HomeScreen;
