import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
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
});
