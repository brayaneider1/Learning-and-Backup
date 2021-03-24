import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 8,
    width: '85%',
    backgroundColor: '#ffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 20
  },
  wrapper: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    fontFamily: 'Montserrat_bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat_medium',
    marginVertical: 8,
  },
  signupButton: {
    bottom: -1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  signupButtonText: {
    fontFamily: 'Montserrat_bold',
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#fff",
  }
});