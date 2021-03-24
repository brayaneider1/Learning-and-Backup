import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    /* backgroundColor: '#ffff', */
    /* minHeight: Dimensions.get('window').height */
  },
  wrapper: {
    position: 'absolute',
    /* justifyContent: '', */
    flexDirection: 'row',
    zIndex: -1,
    bottom: 0,
    /* backgroundColor: 'blue', */
    width: '100%',
    height: '24%',
    /* maxWidth: 360 */
  },
  shpOvaloid: {
    /* top: 260, */
    top: 55,
    height: 98,
    width: 90,
    marginLeft: 5,
    opacity: 0.7
  },
  shpRectangle: {
    height: 400,
    width: 400,
    /* top: 210, */
    top: 0,
    /* backgroundColor: '#ccc' */
  }

});
