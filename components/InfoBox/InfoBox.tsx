import { InfoBoxProps } from '@/interfaces/InfoBoxProps';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const InfoBox: React.FC<InfoBoxProps> = ({ title, description, variant }) => {
    return (
        <View style={[styles.container, variant === 'small' ? styles.smallBox : styles.largeBox]}>
            <Text style={styles.title}>{title}</Text>
            {description && <Text style={styles.description}>{description}</Text>}
        </View>
    );
};


export default InfoBox;
