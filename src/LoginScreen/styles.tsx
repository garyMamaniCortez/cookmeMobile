import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF7F00',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,             
      fontWeight: 'bold',
      marginBottom: 20,         
    },
    image: {
      width: 200,               
      height: 200,              
      borderRadius: 100,        
      marginBottom: 20,         
    },
    label: {
      alignSelf: 'flex-start',
      marginLeft: 30,
      fontSize: 16,
      color: '#000',
    },
    input: {
      width: '80%',
      height: 40,
      backgroundColor: '#D3D3D3',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    forgotPassword: {
      color: 'blue',
      fontSize: 14,
      marginTop: 10,
    },
    register: {
      color: 'blue',
      fontSize: 16,
      marginTop: 5,
      textDecorationLine: 'underline',
    },
  });
