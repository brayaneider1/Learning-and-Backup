import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/navigation/stack';
import { useFonts } from 'expo-font';
import { Text } from "react-native";

import store from './src/store/store';


export default function App(props) {

  const [loaded] = useFonts({
    Montserrat: require('@assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_medium: require('@assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_bold: require('@assets/fonts/Montserrat-Bold.ttf'),
    yampicons: require('@assets/fonts/Yampicons.ttf')
  });

  if (!loaded) {
    return <Text>Splash!</Text>;
  } else {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}