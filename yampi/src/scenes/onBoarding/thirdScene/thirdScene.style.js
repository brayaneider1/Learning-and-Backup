import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  slide: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderBottomColor: "#D9D9D9",
    justifyContent: "center", 
    /* backgroundColor: 'red', */
  },
  image: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    height: 180,
    width: 250,
  },
  textContainer: {
    flex: 1,
    /* top: 0, */
    /* alignItems: 'center', */
    zIndex: 1,
    justifyContent: 'flex-start',
    /* backgroundColor: 'blue', */
  },
  titleContainer: {
    /* top: 0, */
    width: '100%',
    alignItems: 'center',
    /* backgroundColor: 'red' */
    /* justifyContent: 'center' */
  },
  description: {
    /* top: 70, */
    fontSize: 26,
    color: 'white',
    zIndex: 1,
    fontFamily: 'Montserrat_bold',
    marginVertical: 15,
    marginLeft: 20,
    marginRight: 40
  }
});
