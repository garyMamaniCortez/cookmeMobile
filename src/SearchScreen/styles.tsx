import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

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
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 10,
    elevation: 2,
  },
  mainCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    width: '100%', // Ocupa todo el ancho del contenedor
  },
  mainCardImage: {
    width: '100%',
    height: 200,
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
  suggestionList: {
    position: 'absolute',
    top: 40,
    left: 30,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: 20,
    elevation: 5,
    zIndex: 1000,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
});
