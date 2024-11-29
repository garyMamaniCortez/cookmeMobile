import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import { Navbar } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';

const AddRecipeUpScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState<string>('');
  const [cookTime, setCookTime] = useState<string>('');
  const [steps, setSteps] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  
  return (
    <>
      <LinearGradient
          colors={['transparent', '#9A031E']}
          style={styles.container}
        >
        <Text style={styles.tittleText}>Hora de ser Chef</Text>
        {/* Nombre de la receta */}
        <TextInput 
          style={styles.input}
          placeholder="Añadir nombre de receta"
          placeholderTextColor="#777"
        />

        {/* Cuadro para añadir imagen */}
        <TouchableOpacity style={styles.imageBox}>
          <FontAwesome6 name="file-circle-plus" size={48} color="#777" />
          <Text style={styles.imageText}>Añadir Imagen</Text>
        </TouchableOpacity>

        {/* Cuadros de ingredientes y tiempos */}
        <View style={styles.row}>
          {/* Cuadro de ingredientes */}
          <TextInput
            style={[styles.box, styles.smallBox]}
            placeholder="Añadir Ingredientes:"
            placeholderTextColor="#777"
            multiline
            textAlignVertical="top"  // Asegura que el texto esté alineado arriba
          />
          <View style={styles.timeColumn}>
            <TextInput
              style={[styles.timeInput]}
              placeholder="Preparacion (min)"
              placeholderTextColor="#777"
              keyboardType="numeric"
              value={prepTime}
              onChangeText={(text) => setPrepTime(text.replace(/[^0-9]/g, ''))} // Asegura que solo sean números
            />
            <TextInput
              style={[styles.timeInput]}
              placeholder="Coccion (min)"
              placeholderTextColor="#777"
              keyboardType="numeric"
              value={cookTime}
              onChangeText={(text) => setCookTime(text.replace(/[^0-9]/g, ''))} // Asegura que solo sean números
            />
          </View>
        </View>


        {/* Cuadro de pasos */}
        <TextInput
          style={[styles.box, styles.largeBox]}
          placeholder="Añadir Pasos:"
          placeholderTextColor="#777"
          multiline
          textAlignVertical="top"  // Asegura que el texto esté alineado arriba
        />

        {/* Botón de subir */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Subir</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Navbar />
    </>
  );
};

export default AddRecipeUpScreen;
