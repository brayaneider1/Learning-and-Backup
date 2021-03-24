import { StyleSheet } from "react-native";
import { colors } from '@constants';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  forgotPasswordTouchable: {
    paddingVertical:2,
    alignSelf: 'flex-end',
    marginTop: 10,
    alignItems: 'center'
  },
  forgotPasswordText: {
    fontFamily: 'Montserrat_medium',
    textAlign: 'right',
    color: colors.grayslate,
    width: '100%',
    marginBottom: 25,
    fontSize: 14.8
  },
  signupButton: {
    elevation: 10,
  },
  signupButtonText: {
    fontFamily: 'Montserrat_bold',
    fontSize: 14,
    letterSpacing: 1,
    color: "white"
  }
});
