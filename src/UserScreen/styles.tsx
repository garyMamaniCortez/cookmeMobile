import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B0D44',
    alignItems: 'center'
  },
  avatarContainer: {
    backgroundColor: '#E1BEE7',
    borderRadius: 90,
    width: 180  ,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centra horizontalmente
    marginVertical: 10,
    width: '100%', // Para que ocupe toda la pantalla
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
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
    backgroundColor: '#F8BBD0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
    marginVertical: 15,
    marginHorizontal: '2%', // Añade un pequeño margen horizontal para separar ligeramente los cuadros
  },
  gridText: {
    fontSize: 16, // Tamaño base del texto
    color: '#333',
    marginTop: 15,
    textAlign: 'center',
    textTransform: 'capitalize', // Opcional: formatea el texto para una presentación limpia
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Se ajusta para distribuir los botones equitativamente
    width: '100%', // Ocupa el 100% del ancho de la pantalla
    position: 'absolute', // Fija la posición en la parte inferior
    bottom: 0, // Se pega al borde inferior
    left: 0, // Se pega al borde izquierdo
    right: 0, // Se pega al borde derecho
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  }
});

export default styles;
