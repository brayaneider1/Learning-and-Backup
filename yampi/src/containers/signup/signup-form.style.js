import { StyleSheet } from "react-native";
import { colors } from '@constants';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapperIpt: {
    marginBottom: 25,
    width: '100%'
  },
  signupButton: {
    elevation: 10
  },
  signupButtonText: {
    fontFamily: 'Montserrat_bold',
    fontSize: 14,
    letterSpacing: 1,
    color: "white"
  }
});
