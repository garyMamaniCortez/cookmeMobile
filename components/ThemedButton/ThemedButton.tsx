import ThemedButtonProps from '@/interfaces/ThemedButtonProps';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const ThemedButton: React.FC<ThemedButtonProps> = ({
    title,
    onPress,
    buttonStyle,
    textStyle,
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, disabled && styles.disabledButton]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle, ]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ThemedButton;
