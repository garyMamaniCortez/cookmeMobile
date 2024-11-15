import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500', // Fondo naranja
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#A0522D', // Color de texto marrón
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#A0522D',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    elevation: 2, // sombra para el campo de texto
  },
  loginButton: {
    width: '60%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#8B0000', // Color del botón
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#A0522D',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  register: {
    color: '#A0522D',
    textDecorationLine: 'underline',
  },
});
