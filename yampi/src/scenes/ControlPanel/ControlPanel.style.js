import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default style = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  },
  header: {
    flexDirection: "column",
    paddingHorizontal: 25,
    paddingTop: height * 0.04,
    justifyContent: 'space-between',
    backgroundColor: "white",
  },
  logo: {
    height: 25,
    width: 60,
  },
  title: {
    fontSize: 21,
    fontFamily: 'Montserrat_bold',
    marginVertical: 5,
    letterSpacing: 1
  },
  tabBarOptions: {
    backgroundColor: 'white',
    display: 'flex',
    flex:0,
    justifyContent: 'center',
    elevation: 1,
    shadowColor: "#000000",
  },
  dot: {
    display: 'flex',
    top:8,
    height: 13,
    width: 13,
    marginLeft:-4,
    color: '#fff',
    borderRadius: 50,
    backgroundColor: '#000',
    alignItems:'center'
  },
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
  },
  tabs:{
    alignItems:'flex-end',
    display:"flex",
    flexDirection: 'row-reverse',
    top:10
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: 'Montserrat_medium',
    textTransform: 'none',
  }

});
