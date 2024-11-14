import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';
import { FoodCardProps } from '@/interfaces/FoodCardProps';
import Stars from '../Stars/Stars';

const FoodCard: React.FC<FoodCardProps> = ({ imageUrl, title, rating }) => {

    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Stars rating={rating} />
            </View>
        </View>
    );
};

export default FoodCard;
