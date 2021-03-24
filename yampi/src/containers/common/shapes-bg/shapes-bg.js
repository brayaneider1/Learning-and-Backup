
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Ovaloid, Rectangle } from '@ui/shapes'
import style from './shapes-bg.style';

export default function ShapesContainer(props) {
  return (
    <SafeAreaView style={[style.container, props.style]}>
      {props.children}
      <View style={[style.wrapper]}>
        <View style={[style.shpOvaloid]}>
          <Ovaloid />
        </View>
        <View style={[style.shpRectangle]}>
          <Rectangle />
        </View>
      </View>
    </SafeAreaView>
  )
}