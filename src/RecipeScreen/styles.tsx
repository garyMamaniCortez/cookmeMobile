import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF7F0',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    subHeader: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 3,
      alignSelf: 'stretch',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 15,
    },
    subtitle: {
      fontSize: 14,
      color: '#555',
      marginBottom: 10,
    },
    stars: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },
    contentContainer: {
      flex: 1,
    },
    dynamicBox: { 
      backgroundColor: '#FAD9C1',
      margin: 5,
      borderRadius: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 10,
      alignSelf: 'stretch',
    },
    tittleBox: {
      backgroundColor: '#FAD9C1',
      borderRadius: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 0,
      paddingTop: 0,
      padding: 10,
      alignSelf: 'stretch',
    },
    boxText: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#000',
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
    },
    scrollContent: {
      paddingBottom: 20, // Espacio inferior para evitar cortes
    },
  });
