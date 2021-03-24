import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default style = StyleSheet.create({
  container:{
    backgroundColor: 'blue'
  },
  header: {
    flexDirection: "column",
    paddingHorizontal:25,
    paddingTop: height * 0.04,
    justifyContent:  'space-between',
    backgroundColor: "white",
  },
  logo: {
    height: 25,
    width: 60,
  },
  title: { 
    fontSize: 21,
    fontFamily: 'Montserrat_bold',
    marginVertical: 5
  },
  list: {
    backgroundColor: 'white'
  },
  empty: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
