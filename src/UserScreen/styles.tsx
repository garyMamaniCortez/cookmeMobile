import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    borderRadius: 90,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 30,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 75,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centra horizontalmente
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.5,
    borderRadius: 8, // Bordes redondeados
    backgroundColor: "rgba(123, 13, 68, 0.2)",
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFBF7',
    textAlign: 'center', // Asegura que siempre esté centrado
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Cambiar a flex-start para quitar el espacio extra
    width: '90%',
    marginTop: 10,
    marginBottom: 20,
  },
  gridItem: {
    width: '40%', // Ajusta el tamaño del cuadro
    height: '35%',
    backgroundColor: '#FFFBF7',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
    marginVertical: 15,
    marginHorizontal: '2%', // Añade un pequeño margen horizontal para separar ligeramente los cuadros
  },
  gridText: {
    fontSize: 16, // Tamaño base del texto
    color: '#1D1B20',
    marginTop: 15,
    textAlign: 'center',
    textTransform: 'capitalize', // Opcional: formatea el texto para una presentación limpia
  },
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

export default styles;
