import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    marginTop: screenHeight * 0.02,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  commentsSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  commentBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
  commentInputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    backgroundColor: '#FFF',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    height: 40,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#9A031E',
    borderRadius: 50,
    padding: 10,
  },
  sendIcon: {
    color: '#FFF',
  },
});

export default styles;
