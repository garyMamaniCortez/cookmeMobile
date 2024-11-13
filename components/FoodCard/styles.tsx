import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        overflow: 'hidden',
        width: 150,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 100,
    },
    infoContainer: {
        padding: 8,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
