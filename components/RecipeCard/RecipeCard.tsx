import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { RecetaResponse } from '@/interfaces/api/Receta';
import { useNavigation } from '@react-navigation/native';
import { usePostHistorialBusqueda } from '@/hooks/useHistorialBusqueda';
import { Globals } from '@/constants/global';

interface RecipeCardProps {
  receta: RecetaResponse;
  query?: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({ receta,  query }) => {
  const navigation = useNavigation<any>();

  const goToRecipe = async (id_receta : number) => {
    if (query){
      const historialBusqueda = {
        id_usuario: Globals.id_usuario,
        id_receta:  id_receta,
        busqueda:   query
      }
      const { historialBusqueda:data, error } = await usePostHistorialBusqueda(historialBusqueda);
    }
    navigation.navigate('Recipe', { id_receta});
  };
  return (
    <TouchableOpacity style={styles.card} onPress={() => goToRecipe(receta.id_receta) } >
      <Image
        source={{
          uri: receta.imagen || 'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0',
        }}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>{receta.nombre_receta}</Text>
      <View style={styles.cardStars}>
        {Array(receta.promedio_valoracion ? receta.promedio_valoracion : 5)
          .fill(null)
          .map((_, index) => (
            <Ionicons key={index} name="star" size={16} color="#FFD700" />
          ))}
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;