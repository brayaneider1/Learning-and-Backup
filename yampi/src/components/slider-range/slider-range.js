import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const SMALL_SIZE = 13;
const MEDIUM_SIZE = 34;

export default ({
  min, max, fromValueOnChange, toValueOnChange,
  step = 1,
  styleSize = 'small',
  fromKnobColor = '#fdfbfb',
  toKnobColor = '#fdfbfb',
  toKnobBorderColor = 'black',
  inRangeBarColor = '#7b7b7b',
  outOfRangeBarColor = '#f4f4f4',
}) => {

  // settings
  const [wasInitialized, setWasInitialized] = useState(false);
  const [numberOfSteps, setNumberOfSteps] = useState(0);
  const [knobSize, setknobSize] = useState(0);
  const [fontSize, setFontSize] = useState(15);

  const [fromValueOffset, setFromValueOffset] = useState(0);
  const [toValueOffset, setToValueOffset] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [xStart, setXStart] = useState(0);
  const [fromElevation, setFromElevation] = useState(3);
  const [toElevation, setToElevation] = useState(3);

  // animation values
  const [translateXfromValue] = useState(new Animated.Value(0));
  const [translateXtoValue] = useState(new Animated.Value(0));
  const [fromValueScale] = useState(new Animated.Value(0.01));
  const [toValueScale] = useState(new Animated.Value(0.01));
  const [rightBarScaleX] = useState(new Animated.Value(0.01));
  const [leftBarScaleX] = useState(new Animated.Value(0.01));

  // refs
  const toValueTextRef = React.createRef();
  const fromValueTextRef = React.createRef();

  // initalizing settings
  useEffect(() => {
    setNumberOfSteps((max - min) / step);
    fromValueTextRef.current?.setNativeProps({ text: min.toString() });
    toValueTextRef.current?.setNativeProps({ text: max.toString() });
  }, [min, max, step]);
  useEffect(() => {
    const size = styleSize === 'small' ? SMALL_SIZE : styleSize === 'medium' ? MEDIUM_SIZE : 30;
    setknobSize(size);
    translateXfromValue.setValue(-size / 4);
  }, [styleSize]);

  // from value gesture events ------------------------------------------------------------------------
  const onGestureEventFromValue = (event) => {
    let totalOffset = event.nativeEvent.translationX + fromValueOffset;
    if (totalOffset >= xStart - knobSize / 2 && totalOffset < toValueOffset) {
      translateXfromValue.setValue(totalOffset);
      if (fromValueTextRef != null) {
        fromValueTextRef.current?.setNativeProps({ text: (Math.floor(((totalOffset + (knobSize / 2)) * (max - min) / sliderWidth) / step) * step + min).toString() });
      }
      leftBarScaleX.setValue((totalOffset + (knobSize / 2)) / sliderWidth + 0.01);
    }
  }
  const onHandlerStateChangeFromValue = (event) => {
    if (event.nativeEvent.state === State.BEGAN) {
      scaleTo(fromValueScale, 1);
      setElevations(1, 1);
    }
    if (event.nativeEvent.state === State.END) {
      const stepInPixels = sliderWidth / numberOfSteps;
      let newOffset = event.nativeEvent.translationX + fromValueOffset;
      newOffset = Math.floor((newOffset + (knobSize / 2)) / stepInPixels) * stepInPixels - (knobSize / 2);
      if (newOffset < xStart - knobSize / 2) {
        newOffset = xStart - knobSize / 2;
      } else if (newOffset >= toValueOffset) {
        newOffset = toValueOffset - stepInPixels;
      }
      setFromValueOffset(newOffset);
      translateXfromValue.setValue(newOffset);
      leftBarScaleX.setValue((newOffset + (knobSize / 2)) / sliderWidth + 0.01);
      scaleTo(fromValueScale, 0.01);
      fromValueOnChange(Math.floor(((newOffset + (knobSize / 2)) * (max - min) / sliderWidth) / step) * step + min);
    }
  }
  // ------------------------------------------------------------------------------------------------

  // to value gesture events ------------------------------------------------------------------------
  const onGestureEventToValue = (event) => {
    const totalOffset = event.nativeEvent.translationX + toValueOffset;
    if (totalOffset <= sliderWidth - knobSize / 2 && totalOffset > fromValueOffset) {
      translateXtoValue.setValue(totalOffset);
      if (toValueTextRef != null) {
        const numericValue = Math.ceil(((totalOffset + (knobSize / 2)) * (max - min) / sliderWidth) / step) * step + min;
        toValueTextRef.current?.setNativeProps({ text: numericValue.toString() });
      }
      rightBarScaleX.setValue(1.01 - ((totalOffset + (knobSize / 2)) / sliderWidth));
    }
  }
  const onHandlerStateChangeToValue = (event) => {
    if (event.nativeEvent.state === State.BEGAN) {
      scaleTo(toValueScale, 1);
      setElevations(5, 6);
    }
    if (event.nativeEvent.state === State.END) {
      const stepInPixels = sliderWidth / numberOfSteps;
      let newOffset = event.nativeEvent.translationX + toValueOffset;
      newOffset = Math.ceil((newOffset + (knobSize / 2)) / stepInPixels) * stepInPixels - (knobSize / 2);
      if (newOffset > sliderWidth - knobSize / 2) {
        newOffset = sliderWidth - knobSize / 2;
      } else if (newOffset <= fromValueOffset) {
        newOffset = fromValueOffset + stepInPixels;
      }
      setToValueOffset(newOffset);
      translateXtoValue.setValue(newOffset);
      rightBarScaleX.setValue(1.01 - ((newOffset + (knobSize / 2)) / sliderWidth));
      scaleTo(toValueScale, 0.01);
      toValueOnChange(Math.ceil(((newOffset + (knobSize / 2)) * (max - min) / sliderWidth) / step) * step + min);
    }
  }
  // ------------------------------------------------------------------------------------------------

  // gesture events help functions ------------------------------------------------------------------
  const scaleTo = (param, toValue) => Animated.timing(param,
    {
      toValue,
      duration: 150,
      useNativeDriver: true
    }
  ).start();

  const setElevations = (fromValue, toValue) => {
    setFromElevation(fromValue);
    setToElevation(toValue)
  }
  // ------------------------------------------------------------------------------------------------

  // setting bar width ------------------------------------------------------------------------------
  const onLayout = (event) => {
    if (wasInitialized === false) {
      const { width } = event.nativeEvent.layout;
      setSliderWidth(width);
      setXStart(0);
      translateXtoValue.setValue(width - knobSize / 2);
      setToValueOffset(width - knobSize / 1);
      setWasInitialized(true);
    }
  }
  // ------------------------------------------------------------------------------------------------

  return (
    <View style={[styles.container, { padding: styleSize === 'large' ? 0 : styleSize === 'medium' ? 10 : 10 }]}>
      <View style={{ width: '100%', height: knobSize, marginVertical: 0, position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ position: 'absolute', backgroundColor: inRangeBarColor, left: knobSize / 8, marginLeft: -knobSize / 4, right: knobSize / 3, height: knobSize / 3 }} onLayout={onLayout} />
        <Animated.View style={{ position: 'absolute', left: knobSize / 5, marginLeft: -knobSize / 5, right: knobSize / -8, height: knobSize / 3, backgroundColor: outOfRangeBarColor, transform: [{ translateX: sliderWidth / 2 }, { scaleX: rightBarScaleX }, { translateX: -sliderWidth / 2 }] }} />
        <Animated.View style={{ position: 'absolute', left: -knobSize / 4, width: knobSize / 2, height: knobSize / 3, borderRadius: knobSize / 3, backgroundColor: outOfRangeBarColor }} />
        <Animated.View style={{ width: sliderWidth, height: knobSize / 3, backgroundColor: outOfRangeBarColor, transform: [{ translateX: -sliderWidth / 2 }, { scaleX: leftBarScaleX }, { translateX: sliderWidth / 2 }] }} />
        <Animated.View style={{ position: 'absolute', left: sliderWidth - knobSize / 4, width: knobSize / 2, height: knobSize / 3, borderRadius: knobSize / 3, backgroundColor: outOfRangeBarColor }} />
        <PanGestureHandler onGestureEvent={onGestureEventFromValue} onHandlerStateChange={onHandlerStateChangeFromValue}>
          <Animated.View style={[styles.knob, { height: 24, width: 24, border: 1, borderRadius: knobSize, borderWidth: 1, backgroundColor: fromKnobColor, borderColor: "#000000", elevation: 0, transform: [{ translateX: translateXfromValue }] }]} />
        </PanGestureHandler>
        <PanGestureHandler onGestureEvent={onGestureEventToValue} onHandlerStateChange={onHandlerStateChangeToValue}>
          <Animated.View style={[styles.knob, { height: 24, width: 24, borderRadius: knobSize, backgroundColor: toKnobColor, borderWidth: 1, borderColor: toKnobBorderColor, elevation: 0, transform: [{ translateX: translateXtoValue }] }]} />
        </PanGestureHandler>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '100%',
    marginTop: -18
  },
  knob: {
    position: 'absolute',
    elevation: 5
  }
});