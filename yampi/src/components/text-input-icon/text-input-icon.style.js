import { StyleSheet } from "react-native";
import { colors } from '@constants';

export default styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 12,
    padding:10,
  },
  inputWrapperFocused: {
    borderWidth: 1.5,
    borderColor: colors.fucshia
  },
  input: {
    width: '100%',
    paddingRight: 70,
    fontFamily: 'Montserrat_medium',
  },
  icon: {
    paddingLeft: 15,
    paddingRight: 14
  },
});
