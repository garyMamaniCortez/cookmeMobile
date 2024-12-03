import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import { Navbar } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';
import { RecetaRequest } from '@/interfaces/api/Receta';
import { Globals } from '@/constants/global';
import { MultiSelect } from 'react-native-element-dropdown';
import { useCategorias } from '@/hooks/useCategoria';
import ErrorScreen from '../ErrorScreen/ErrorScreen';

const AddRecipeUpScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState<string>('');
  const [cookTime, setCookTime] = useState<string>('');
  const [steps, setSteps] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const {data, error} = useCategorias();

  const handleSubmit = () => {
    if (!name || !ingredients || !prepTime || !cookTime || !steps) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    const newRecipe:RecetaRequest = {
      nombre_receta: name,
      descripcion: description,
      instrucciones: steps,
      tiempo_preparacion: parseInt(prepTime, 10),
      tiempo_coccion: parseInt(cookTime, 10),
      imagen: imageUri!,
      id_categoria: parseInt(category[0]), // modificar esto
      id_usuario: Globals.id_usuario
    };

    setName('');
    setIngredients('');
    setDescription('');
    setPrepTime('');
    setCookTime('');
    setSteps('');
    setCategory([]);
    setImageUri(null);

    console.log('Nueva receta:', newRecipe);
    Alert.alert('Éxito', 'La receta se ha subido correctamente.');
  };
  if(data)
  return (
    <>
      <LinearGradient
          colors={['transparent', '#9A031E']}
          style={styles.container}
        >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.tittleText}>Hora de ser Chef</Text>
          {/* Nombre de la receta */}
          <TextInput 
            style={styles.input}
            placeholder="Añadir nombre de receta"
            placeholderTextColor="#777"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            style={[styles.box, styles.largeBox]}
            placeholder="Añadir Descripcion:"
            placeholderTextColor="#777"
            multiline
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
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
              textAlignVertical="top"
              value={ingredients}
              onChangeText={setIngredients}
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

          <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          data={data!}
          labelField="nombre_categoria"
          valueField="id_categoria"
          placeholder="Categorias"
          searchPlaceholder="Buscar..."
          value={category}
          onChange={item => {
            setCategory(item);
          }}
          selectedStyle={styles.selectedStyle}
        />

          {/* Cuadro de pasos */}
          <TextInput
            style={[styles.box, styles.largeBox]}
            placeholder="Añadir Pasos:"
            placeholderTextColor="#777"
            multiline
            textAlignVertical="top"
            value={steps}
            onChangeText={setSteps}
          />

          {/* Botón de subir */}
          <TouchableOpacity style={styles.button}  onPress={handleSubmit}>
            <Text style={styles.buttonText}>Subir</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
      <Navbar />
    </>
  );
  else{
    return (
      <ErrorScreen error={error!} />
    );
  }
};

export default AddRecipeUpScreen;