import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Yampicons } from '../../yampicons/yampicons';
import style from './social-button.style';

export default SocialButton = (props) => {

  const {
    type,
    width,
    height,
    paddingHorizontal,
    paddingVertical,
    radius,
    onPressAction
  } = props;

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[
          { borderRadius: radius, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, width: width, height: height },
          style[type],
          style.socialButtonStyle
        ]}
        activeOpacity={.82}
        onPress={() => {
          if (onPressAction) {
            return onPressAction();
          }
        }}
      >
      <Yampicons style={{fontSize: 16, color: 'white', paddingRight: 2}} name={type}/>
        <Text style={style.textStyle}> {type} </Text>
      </TouchableOpacity>

    </View>
  );
}

SocialButton.defaultProps = {
  height: 40,
  radius: 10,
  paddingHorizontal: 20, 
  paddingVertical: 0,
  width: 130
}