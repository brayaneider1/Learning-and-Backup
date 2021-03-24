import { StyleSheet } from "react-native";
import { colors } from '@constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  titleWrapper: {
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Montserrat_bold'
  },
  subTitle: {
    color: '#999999',
    fontSize: 15,
    fontFamily: 'Montserrat_medium',
    paddingVertical: 8
  },
  formWrapper: {
  },
  bottomWrapper: {
    flex: 1,
    paddingVertical: 30,
    justifyContent: 'flex-start',
  }
});
