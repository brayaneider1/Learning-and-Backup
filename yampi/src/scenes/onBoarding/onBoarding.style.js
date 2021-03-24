import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        /* backgroundColor: 'red' */
      },
      containerSlide:{
        height:'100%',
        width:'100%'
      },
      slide:{
          alignItems:'center',
          justifyContent:'center'
      },
      image:{
          width:'100%',
          height:'100%',
      },
      footer:{
       position:'absolute',
          top:100,
          marginLeft:20,
          height:120,
          alignItems:'center',
          justifyContent:'center'
      },
      divider: {
        borderBottomColor: "black",
        borderBottomWidth: 0.7,
        marginTop: 20,
      },
      logo: {
        height: 500,
        width: 250,
      },
      textContainer:{
          position:'relative',
          top:10,
          marginLeft:20,
          height:120,
          alignItems:'center',
          justifyContent:'center'
      },
      titleContainer:{
          width:'80%',
          height:70,
          alignItems:'center',
          justifyContent:'center'
      }
      

});
