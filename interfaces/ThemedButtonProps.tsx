import { StyleProp, TextStyle, ViewStyle } from "react-native";

export default interface ThemedButtonProps {
    title: string;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
}
