import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { FoodCardProps } from '@/interfaces/FoodCardProps';

const FoodCard: React.FC<FoodCardProps> = ({ imageUrl, title, rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.ratingContainer}>
                    {[...Array(fullStars)].map((_, i) => (
                        <FontAwesome key={`full-${i}`} name="star" size={16} color="#FFD700" />
                    ))}
                    {halfStar && <FontAwesome name="star-half" size={16} color="#FFD700" />}
                    {[...Array(emptyStars)].map((_, i) => (
                        <FontAwesome key={`empty-${i}`} name="star-o" size={16} color="#FFD700" />
                    ))}
                </View>
            </View>
        </View>
    );
};


export default FoodCard;
