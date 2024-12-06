import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500', // Fondo anaranjado
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#703800', // Tono oscuro para el título
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
    color: '#703800', // Mismo color que el título
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    fontSize: 16,
    color: '#000000', // Texto negro en los cuadros
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#7B0D44', // Color guindo para el botón
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  loginLink: {
    fontSize: 14,
    color: '#703800',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
