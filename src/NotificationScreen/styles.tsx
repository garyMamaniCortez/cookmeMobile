import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15, // Espaciado horizontal
    paddingTop: 20,        // Espaciado superior
  },
  mainCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    width: '100%', // Ocupa todo el ancho del contenedor
  },
  contentContainer: {
    paddingBottom: 70, // Espaciado inferior para evitar solapamiento con la barra de navegación
    alignItems: 'center', // Centra las tarjetas en el eje horizontal
  },
  list: {
    padding: 16,
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
  },
  notificationTextBold: {
    fontWeight: 'bold',
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
});