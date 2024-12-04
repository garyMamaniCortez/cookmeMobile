import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView, Text, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { Navbar, RecipeCard } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';
import { useSearch } from '@/hooks/useReceta';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import styles from './styles';
import { RecetaSearch } from '@/interfaces/api/Receta';
import { useHistorialBusqueda } from '@/hooks/useHistorialBusqueda';
import { Globals } from '@/constants/global';

const SearchScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState<RecetaSearch | null>(null);
  const { data, error } = useSearch(query!);
  const { data:historial, error:historialError } = useHistorialBusqueda(Globals.id_usuario);

  const handleSearch = () => {
    setQuery({query:searchText});
    setSearchText('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchText('');
    setQuery({ query: suggestion });
  };

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <>
      <LinearGradient
        colors={['transparent', '#FB8B24']}
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
            placeholder="Búsqueda"
            placeholderTextColor="#AAA"
            value={searchText}
            onChangeText={setSearchText} // Llama a la función handleSearch cuando cambia el texto
            onSubmitEditing={handleSearch}
          />
          {searchText.length > 0 && historial &&(
              <FlatList
                data={historial!.filter((item) =>
                  item.busqueda.toLowerCase().includes(searchText.toLowerCase())
                )}
                keyExtractor={(_, index) => index.toString()}
                style={styles.suggestionList}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.suggestionItem}
                    onPress={() => handleSuggestionClick(item.busqueda)}
                  >
                    <Text>{item.busqueda}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.grid}>
            {data && data.map((receta) => (
              <RecipeCard key={receta.id_receta.toString()} receta={receta} query={query!.query} />
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
      <Navbar />
    </>
  );
};

export default SearchScreen;
