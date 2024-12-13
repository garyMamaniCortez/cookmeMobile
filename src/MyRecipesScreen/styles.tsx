import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15, // Espaciado horizontal
    paddingTop: 20,        // Espaciado superior
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    marginTop: screenHeight * 0.02,
    paddingBottom: screenHeight * 0.02,
    paddingRight: screenWidth * 0.25,
  },
  tittleText: {
    fontSize: 26,
    color: '1D1B20',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    width: (screenWidth - 60) / 2, // Dos tarjetas por fila con espaciado entre ellas
    marginBottom: 15,
    elevation: 3,
    alignItems: 'center', // Centra contenido en la tarjeta
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  cardStars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Asegura espaciado uniforme
    width: '100%',
  },
  contentContainer: {
    paddingBottom: 70, // Espaciado inferior para evitar solapamiento con la barra de navegación
    alignItems: 'center', // Centra las tarjetas en el eje horizontal
  },
});
