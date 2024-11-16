import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9A031E', // Fondo sólido
    alignItems: 'center',
    paddingTop: 60, // Baja todos los elementos un 20% adicional
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    elevation: 1,
  },
  imageBox: {
    width: '90%',
    height: 150,
    backgroundColor: '#FCE4EC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30, // Ajuste del espaciado entre componentes
    elevation: 1,
  },
  imageText: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
    textAlign: 'center', // Texto centrado en el cuadro de imagen
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 30, // Espaciado extra entre filas
  },
  box: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    elevation: 1,
    alignItems: 'flex-start', // Alinea el contenido del cuadro al inicio
    width: '100%', // Asegura que el cuadro ocupe todo el ancho disponible
    flexDirection: 'column', // Asegura que el contenido se apile de arriba hacia abajo
  },
  smallBox: {
    width: '45%',
    height: 100,
  },
  largeBox: {
    width: '90%',
    height: 250,
    marginBottom: 20, // Reduce espacio para el botón adicional
  },
  boxText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left', // Alinea el texto al inicio dentro del cuadro
    width: '100%', // Asegura que el texto ocupe todo el ancho del cuadro
    marginBottom: 10, // Espacio extra debajo del texto para que no esté pegado al borde
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFD700', // Color amarillo
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20, // Espacio del botón con la barra de navegación
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ocupa el 100% del ancho de la pantalla
    position: 'absolute',
    bottom: 0, // Pegado al borde inferior
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
});

export default styles;
