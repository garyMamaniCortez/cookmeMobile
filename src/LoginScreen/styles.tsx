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
    color: '#9C4C16', // Color de texto marrón
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: '#7B0D44',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFBF7',
    marginBottom: 15,
    elevation: 2, // sombra para el campo de texto
  },
  loginButton: {
    width: '60%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#7B0D44', // Color del botón
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFBF7',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#7B0D44',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  register: {
    color: '#7B0D44',
    textDecorationLine: 'underline',
  },
});
