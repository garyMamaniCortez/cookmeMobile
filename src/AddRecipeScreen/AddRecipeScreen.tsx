import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const AddRecipeUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Nombre de la receta */}
      <TextInput 
        style={styles.input}
        placeholder="Añadir nombre de receta"
        placeholderTextColor="#777"
      />

      {/* Cuadro para añadir imagen */}
      <TouchableOpacity style={styles.imageBox}>
        <FontAwesome name="file-image-o" size={48} color="#777" />
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

        {/* Cuadro de tiempos */}
        <TextInput
          style={[styles.box, styles.smallBox]}
          placeholder="Añadir Tiempos:"
          placeholderTextColor="#777"
          multiline
          textAlignVertical="top"  // Asegura que el texto esté alineado arriba
        />
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

      {/* Barra de navegación */}
      <View style={styles.navigation}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="timer-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={28} color="#7B0D44" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddRecipeUpScreen;
