import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: '#F5D7C4',
        borderRadius: 12,
        padding: 16,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallBox: {
        width: 150,
        height: 150,
    },
    largeBox: {
        width: 320,
        height: 200,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
});
