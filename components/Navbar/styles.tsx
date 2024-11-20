import { StyleSheet } from "react-native";

export default StyleSheet.create({
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Se ajusta para distribuir los botones equitativamente
        width: '100%', // Ocupa el 100% del ancho de la pantalla
        position: 'absolute', // Fija la posición en la parte inferior
        bottom: 0, // Se pega al borde inferior
        paddingHorizontal: 22, // Espaciado izquierdo y derecho
        backgroundColor: '#FFFBF7',
        paddingVertical: 10,
        borderTopWidth: 1,
    },
});
