import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F48C06', // Fondo naranja
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#A63A10', // Color del título
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#A63A10', // Color de las etiquetas
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF', // Fondo blanco para inputs
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#7B2CBF', // Botón morado oscuro
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#A63A10', // Color del enlace de texto
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
