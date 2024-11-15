import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SearchBarProps from '@/interfaces/SearchBarProps';
import { styles } from './styles';


const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Búsqueda', ...props }) => {
    return (
        <View style={styles.container}>
            <MaterialIcons name="menu" size={24} color="#333" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#333"
                {...props}
            />
        </View>
    );
};

export default SearchBar;
