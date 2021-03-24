import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  content: {
    display:'flex',
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingTop: 40,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    position:'relative'
  },
  title: {
    fontSize: 21,
    fontFamily: "Montserrat_bold",
  },
  text: {
    fontSize: 20,
    fontFamily: "Montserrat_medium",
    textAlign: "left",
    paddingVertical: 5,
    fontWeight: "600",
  },
  slide: {
  },
  grayText: {
    fontSize: 14,
    color: "#afafaf",
    fontWeight: "300",
    fontFamily: "Montserrat_medium",
    textAlign: "left",
    paddingVertical: 5,
  },
  leading: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical:5
  },
  close: {
    fontSize: 27,
    marginRight: 13,
  },
  divider: {
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 0.7,
    marginVertical: 10,
  },
  textCounter: {
    fontSize: 20,
    fontFamily: "Montserrat_medium",
    textAlign: "left",
    paddingVertical: 5,
    fontWeight: "600",
    marginHorizontal: 20,
  },
  signupButton: {
    elevation: 10,
    width: 100
  },
  signupButtonText: {
    fontFamily: 'Montserrat_bold',
    fontSize: 14,
    letterSpacing: 1,
    color: "white"
  }
});