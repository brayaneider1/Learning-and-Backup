import { StyleSheet } from "react-native";
import { colors } from '@constants';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  socialButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebook:{
    backgroundColor: colors.facebook,
  },
  google: {
    backgroundColor: colors.google,
  },
  textStyle: {
    fontFamily: 'Montserrat_bold',
    fontSize: 13.8,
    color:'white',
    textAlign:'center',
    textTransform: 'capitalize'
  }
});
