import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 10,
    elevation: 2,
  },
  mainCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
  },
  mainCardImage: {
    width: '100%',
    height: 200,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    width: (screenWidth - 60) / 2,
    marginBottom: 15,
    elevation: 3,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingBottom: 70,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
