import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: "#000",
    position: "absolute",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    zIndex: 1
  },
  toolbar: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leading: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 21,
    fontFamily: 'Montserrat_bold'
  },
  close: {
    fontSize: 27,
    marginRight: 10,
    marginTop: 3
  },
  actions: {
    paddingHorizontal: 5,
  },
  searchBox: {
    marginBottom: 20,
    alignItems: "center",
  },
  inputSearch: {
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchTextfield: {
    width: '78%',
    paddingHorizontal: 15,
    color: '#000000',
    fontFamily: 'Montserrat_medium',
    fontSize: 13
  },
  iconSearch: {
    marginLeft: 20,
    color: '#000000',
    fontSize: 18
  },
  wrapperIcons: {
    flexDirection: 'row'
  },
  icon: {
    color: "#b5b5b5",
    fontSize: 16,
    paddingLeft: 16
  }
})