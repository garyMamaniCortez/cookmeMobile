import { StyleProp, ViewStyle } from "react-native";

export type InputType = 'email' | 'password' | 'phone' | 'text';
type AutoCapitalizeType = "none" | "sentences" | "words" | "characters";
type KeyboardType = "default" | 'numeric'| 'email-address'| "ascii-capable"| 'numbers-and-punctuation'| 'url'| 'number-pad'| 'phone-pad'| 'name-phone-pad'| 'decimal-pad'| 'twitter'| 'web-search'| 'visible-password'

export interface ThemedInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    type: InputType;
    secureTextEntry?: boolean;
    style?: StyleProp<ViewStyle>;
    errorText?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    autoCapitalize?: AutoCapitalizeType;
    keyboardType?: KeyboardType;
}
