import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer:{
    paddingBottom: 70,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 30,
    paddingHorizontal: 0,
    paddingTop: 20, // Baja todos los elementos un 20% adicional
  },
  tittleText: {
    fontSize: 26,
    color: '1D1B20',
    paddingBottom: '5%',
    fontWeight: 'bold',
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
  dropdown: {
    height: 40,
    width: '50%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    color: '#777',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#777',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#1D1B20',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#1D1B20',
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#1D1B20',
  },
  selectedStyle: {
    borderRadius: 12,
    borderColor: '#00000'
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
    width: '55%',
    height: 100,
  },
  largeBox: {
    width: '90%',
    height: 250,
    marginBottom: 20, // Reduce espacio para el botón adicional
    marginTop: 30,
  },
  timeColumn: {
    width: '40%', // Tiempos ocupan un 40% del ancho del contenedor padre
    justifyContent: 'space-between', // Espacio uniforme entre los inputs
  },
  timeInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    elevation: 1,
    height: 'auto',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#FB8B24',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20, // Espacio del botón con la barra de navegación
  },
  buttonText: {
    fontSize: 18,
    color: '#1D1B20',
    fontWeight: 'bold',
  },
});

export default styles;
