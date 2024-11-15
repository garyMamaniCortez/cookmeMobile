import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const Navbar: React.FC = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState<string>('Home');

    const handlePress = (screen: string) => {
        setActiveTab(screen);
        navigation.navigate(screen as never);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress('Home')}>
                <MaterialCommunityIcons
                    name="home"
                    size={24}
                    color={activeTab === 'Home' ? '#8A4A00' : '#333'}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress('Trending')}>
                <MaterialCommunityIcons
                    name="fire"
                    size={24}
                    color={activeTab === 'Trending' ? '#8A4A00' : '#333'}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress('Add')}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    size={24}
                    color={activeTab === 'Add' ? '#8A4A00' : '#333'}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress('Notifications')}>
                <MaterialCommunityIcons
                    name="bell"
                    size={24}
                    color={activeTab === 'Notifications' ? '#8A4A00' : '#333'}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress('Profile')}>
                <MaterialCommunityIcons
                    name="account"
                    size={24}
                    color={activeTab === 'Profile' ? '#8A4A00' : '#333'}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Navbar;
