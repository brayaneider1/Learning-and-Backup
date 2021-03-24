import { StyleSheet } from "react-native";
import { colors } from '@constants';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  logo: {
    height: 110,
    width: 290
  },
  formWrapper: {
    flex: 1.5,
    justifyContent: "center",
    backgroundColor: '#F2F2F2'
  },
  bottomWrapper: {
    flex: 0.4,
    justifyContent: 'flex-start',
  },
  socialLoginTitle: {
    textAlign: 'center',
    color: colors.graysilver,
    fontFamily: 'Montserrat_medium',
    marginBottom: 30,
    fontSize: 15
  },
  socialLogin: {
    marginBottom: 50
  }
});
