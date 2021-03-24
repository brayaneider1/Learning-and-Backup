
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import _style from './text-linked.style';

export const TextLinked = (props) => {

  const { style, text, textLink, onPress } = props;

  return (
    <View style={[style, _style.container]}>
      <Text style={[_style.text]}>{text}</Text>

      <TouchableOpacity
        activeOpacity={.52}
        style={{ height: 22 }}
        onPress={onPress}
      >
        <Text style={[_style.text, _style.link]}>{textLink}</Text>
      </TouchableOpacity>

    </View>
  )
}
TextLinked.defaultProps = {
  style: {}
}