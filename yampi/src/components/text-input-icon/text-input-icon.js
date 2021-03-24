import React, { useRef, useEffect } from 'react';
import { View, TextInput, Animated } from 'react-native';
import { Yampicons } from '../yampicons/yampicons';
import { colors } from '@constants'
import style from './text-input-icon.style';

export const TextInputIcon = (props) => {

  const {
    placeholder,
    value,
    width,
    heigth,
    icon,
    iconSize,
    iconColor,
    radius,
    backgroundColor,
    placeholderTextColor,
    fontColor,
    fontSize,
    onChangeText,
    onBlur,
    onFocus,
    isError,
    borderColor,
    borderWidth,
    ...inputProps
  } = props;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const startShake = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
  }

  useEffect(() => { if (isError) startShake() }, [isError]);

  return (
    <Animated.View style={{ transform: [{ translateX: fadeAnim }], width: width }}>
      <View style={[style.inputWrapper, isError ? style.inputWrapperFocused : null, {
        width: width,
        height: heigth,
        borderRadius: radius,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: borderWidth
      }]}>

        <Yampicons
          name={icon}
          style={[style.icon, {
            fontSize: iconSize,
            color: isError ? colors.fucshia : iconColor
          }]
          }
        />
        <TextInput
          {...inputProps}
          placeholderTextColor={isError ? colors.fucshia : placeholderTextColor}
          placeholder={placeholder}
          value={value}
          onChangeText={value => onChangeText(value)}
          style={[style.input, {
            color: isError ? colors.fucshia : fontColor,
            fontSize: fontSize
          }]}
        />
      </View>
    </Animated.View>
  );
}

TextInputIcon.defaultProps = {
  placeholder: '',
  width: '100%',
  value: null,
  heigth: 50,
  iconSize: 24,
  iconColor: colors.graysilver,
  radius: 0,
  backgroundColor: 'white',
  placeholderTextColor: colors.graysilver,
  fontColor: colors.graysilver,
  fontSize: 16.5,
  onChangeText: null,
  isError: false,
  borderColor: null,
  borderWidth: 0,
};