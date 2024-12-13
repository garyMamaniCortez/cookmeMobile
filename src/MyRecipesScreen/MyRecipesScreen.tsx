import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { RecipeCard } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';
import { useUserReceta } from '@/hooks/useReceta';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { Globals } from '@/constants/global';

const MyRecipesScreen: React.FC = () => {
  const {data, error} = useUserReceta(Globals.id_usuario);
  const navigation = useNavigation<any>();
  
  const goBack = () => {
    navigation.navigate('User');
  };

  if(data)
    return (
      <>
        <LinearGradient
          colors={['transparent', '#7B0D44']} // Fondo degradado de arriba hacia abajo
          style={styles.container}
        >
          <StatusBar style="dark" backgroundColor="transparent" translucent={false} />
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                <Ionicons name="return-down-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.tittleText}>Mis Recetas</Text>
          </View>
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.grid}>
              {/* Additional cards */}
              {data.map((receta) => (
                  <RecipeCard key={receta.id_receta.toString()} receta={receta} />
              ))}
            </View>
          </ScrollView>
        </LinearGradient>
      </>
    );
  else
    return (
      <ErrorScreen error={error!} />
    );
};

export default MyRecipesScreen;
