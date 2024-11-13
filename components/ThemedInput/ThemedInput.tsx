import React, { useState } from 'react';
import { View, TextInput, Text, TextInputProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

import styles from './styles';
import { ThemedInputProps } from '@/interfaces/ThemedInputProps';
import useValidateInput from '@/hooks/useValidateInput';


const ThemedInput: React.FC<ThemedInputProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    type,
    secureTextEntry = false,
    style,
    errorText,
    onFocus,
    onBlur,
    autoCapitalize = "none",
    keyboardType = "default"
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleBlur = () => {
        setIsFocused(false);
        if (onBlur) onBlur();
        setIsValid(useValidateInput(value, type));
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (onFocus) onFocus();
    };

    const handleChangeText = (text: string) => {
        setIsValid(useValidateInput(text, type));
        onChangeText(text);
    };

    return (
        <View style={[ styles.container, style ]}>
            {label && <Text style={ styles.label }>{ label }</Text>}
            <TextInput
                style={[
                    styles.input,
                    isFocused && styles.focusedInput,
                    !isValid && styles.errorInput
                ]}
                placeholder={ placeholder }
                value={ value }
                onChangeText={ handleChangeText }
                secureTextEntry={ secureTextEntry }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                autoCapitalize={ autoCapitalize }
                keyboardType={ keyboardType }
            />
            {!isValid && errorText && <Text style={ styles.errorText }>{ errorText }</Text>}
        </View>
    );
};

export default ThemedInput;
