import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationPin: {
    fontSize: 22,
    color: '#d64060'
  },
  locationCity: {
    fontFamily: 'Montserrat_medium'
  },
  wrapperIcons: {
    flexDirection: 'row'
  },
  icon: {
    color: "#b5b5b5",
    fontSize: 18,
    paddingLeft: 16
  }
});
