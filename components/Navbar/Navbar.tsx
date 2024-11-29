import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

const Navbar: React.FC = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState<string>('Home');

    const handlePress = (screen: string) => {
        setActiveTab(screen);
        navigation.navigate(screen as never);
    };

    return (
        <View style={styles.navigation}>
        <TouchableOpacity onPress={() => handlePress('Home')}>
          <Ionicons 
            name="home-outline" 
            size={28} 
            color={activeTab === 'Home' ? "#9C4C16": '#1D1B20'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Tendency')}>
          <Ionicons
            name="search-outline" 
            size={28} 
            color={activeTab === 'Tendency' ? "#FB8B24": "#1D1B20"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Add')}>
          <MaterialIcons 
            name="add-circle-outline" 
            size={32} 
            color={activeTab === 'Add' ? "#9A031E": "#1D1B20" }/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Notification')}>
          <Ionicons name="notifications-outline" 
            size={28} 
            color={activeTab === 'Notification' ? "#F6DBC5": "#1D1B20" }/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('User')}>
          <Ionicons 
            name="person-circle-outline" 
            size={28} 
            color={activeTab === 'User' ? "#7B0D44": "#1D1B20"} />
        </TouchableOpacity>
      </View>
    );
};

export default Navbar;
