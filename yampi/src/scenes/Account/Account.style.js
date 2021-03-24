import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  header: {
    marginTop: 10,
    alignItems: 'center'
  },
  avatarContainer: {
    flex: 0,
    alignItems: 'center',
    shadowColor: '#151734',
    shadowRadius: 15,
    shadowOpacity: 0.4,
    width: 140,
    height: 140,
    borderRadius: 68,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#845c9b"
  },
  avatar: {
    margin: 4,
    width: 128,
    height: 128,
    borderRadius: 68,
  },
  uploadBox: {
    flex: 0,
    height: 50,
    width: 95,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0
  },
  logo: {
    height: 20,
    width: 60,
  },
  text: {
    fontSize: 22,
    fontFamily: "Montserrat_bold",
    textAlign: "left",
    paddingVertical: 4,
    fontWeight: "900",
    letterSpacing: 0.5
  },
  textUser: {
    fontSize: 15,
    fontFamily: "Montserrat_bold",
    textAlign: "center",
    fontWeight: "900",
    letterSpacing: 0.5
  },
  textItems: {
    fontSize: 15,
    fontFamily: "Montserrat_medium",
    textAlign: "left",
    marginLeft: 40
  },
  divider: {
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  dividerText: {
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 0.7,
    width: '22%',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItems: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  }
})