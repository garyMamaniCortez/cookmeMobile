import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
    },
    focusedInput: {
        borderColor: '#007BFF',
    },
    errorInput: {
        borderColor: '#FF0000',
    },
    errorText: {
        color: '#FF0000',
        fontSize: 12,
        marginTop: 4,
    },
});