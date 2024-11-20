import { StyleSheet } from "react-native";

export default StyleSheet.create({
    error: {
        color: "#FF0000", // Color rojo para resaltar el error
        fontSize: 16, // Tamaño de texto legible
        fontWeight: "bold", // Negrita para darle más énfasis
        textAlign: "center", // Centrar el texto horizontalmente
        marginVertical: 10, // Separación vertical
        padding: 10, // Espaciado interno
        backgroundColor: "#FEECEC", // Fondo suave para resaltar el mensaje
        borderRadius: 8, // Bordes redondeados
        borderWidth: 1, // Borde del contenedor
        borderColor: "#FFCCCC", // Color del borde ligeramente más oscuro que el fondo
    },
    errorView: {
        flex: 1,
        justifyContent: "center", // Centrar verticalmente
        alignItems: "center", // Centrar horizontalmente
        margin: 20, // Margen alrededor del contenedor
        padding: 10, // Espaciado interno
        borderRadius: 8, // Bordes redondeados
    },
});