import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './gradient-button.style';

export default GradientButton = (props) => {

  const {
    style,
    text,
    textStyle,
    gradientBegin,
    gradientEnd,
    height,
    width,
    radius,
    onPressAction,
    disabled,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={.82}
      style={[styles.button, { height, width }]}
      onPress={disabled ? null : () => {
        if (onPressAction) {
          return onPressAction();
        }
      }}
    >
      <LinearGradient
        style={[styles.gradient, { borderRadius: radius }, style]}
        colors={[gradientBegin, gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

GradientButton.defaultProps = {
  gradientBegin: "#57157D",
  gradientEnd: "#7923AA",
  height: 55,
  radius: 0,
  width: '80%',
  textStyle: {},
};