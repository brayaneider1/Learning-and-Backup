import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default style = StyleSheet.create({
  image: {
    marginHorizontal: 24,
    height: height * 0.24,
    borderRadius: 20,
    backgroundColor:'white'
  },
  card: {
    flexDirection: 'column',
    width: width / 1.26,
    borderRadius: 18,
    paddingTop: 15,
    paddingHorizontal: 25,
    bottom: 12,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 15,
    shadowColor: 'black',
    elevation: 6
  },
  wrapperTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
    fontSize: 13,
    color: '#BBBBBB',
    fontFamily:'Montserrat_bold'  
  },
  fav: {
    fontSize: 22,
    color: '#e2578c',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontFamily:'Montserrat_bold',
    marginBottom: 5
  },
  localization: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  localizationPin: {
    paddingRight: 5,
    fontSize: 15,
    color: '#d94267'
  },
  address: {
    fontSize: 12.5,
    color: '#b8b8b8',
    fontFamily: 'Montserrat_medium'
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 8
  },
  featureBox: {
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    margin: 4,
    backgroundColor: '#FAE2EB',
    borderRadius: 4,
  },
  featureText: {
    fontSize: width / 34,
    color: '#D82067',
  }
});
