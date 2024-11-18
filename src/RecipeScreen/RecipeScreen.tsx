import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

const RecipeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <StatusBar style="dark" backgroundColor="transparent" translucent={false} />
        
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons name="return-down-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Tacos al Pastor</Text>
            
            {/* Botón de favoritos */}
            <TouchableOpacity>
                <Ionicons name="bookmark-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>

        {/* Icono de mensaje como botón */}
        <TouchableOpacity>
            <MaterialIcons name="add-comment" size={24} color="black" />
        </TouchableOpacity>

        {/* Subheader */}
        <View style={styles.subHeader}>
            <Text style={styles.subtitle}>Por: MexiK047</Text>
            <View style={styles.stars}>
                {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Ionicons key={index} name="star" size={20} color="#FFD700" />
                ))}
            </View>
        </View>

        <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0', // Coloca aquí tu URL de imagen o ruta local
            }}
            style={styles.image}
        />

        <View style={styles.contentContainer}>
            <View style={styles.dynamicBox}>
                <View style={styles.tittleBox}>
                    <Text style={styles.boxText}>Ingredientes</Text>
                </View>
                <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, consectetur sint itaque perspiciatis tempore maxime!</Text>
            </View>
            <View style={styles.dynamicBox}>
                <View style={styles.tittleBox}>
                    <Text style={styles.boxText}>Tiempos</Text>
                </View>
                <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </View>
            <View style={styles.dynamicBox}>
                <View style={styles.tittleBox}>
                    <Text style={styles.boxText}>Pasos a seguir</Text>
                </View>
                <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, consectetur sint itaque perspiciatis tempore maxime! Quo pariatur deserunt exercitationem atque, magni, totam eius sunt itaque rem omnis rerum aspernatur! Ex.</Text>
            </View>
        </View>
    </ScrollView>
  );
};

export default RecipeScreen;

