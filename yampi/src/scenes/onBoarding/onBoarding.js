import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ShapesContainer } from '@containers'
import Onboarding from 'react-native-onboarding-swiper';
import styles from './onBoarding.style'
import FirstScene from './firstScene/firstScene'
import SecondScene from './secondScene/secondScene'
import ThirdScene from './thirdScene/thirdScene'

const Done = ({ isLight, ...props }) => (
  <View>
    <View
      style={{
        borderWidth: 0,
        borderColor: "#D9D9D9",
        marginRight: 10,
      }}
    />
    <TouchableHighlight
      transparent
      title={"terminar"}
      style={{
        color: "#162CA3",
        backgroundColor: "transparent",
        borderColor: "transparent",
        shadowColor: "transparent",
      }}
      {...props}
    >
      <Text
        uppercase={false}
        style={{
          color: "#162CA3",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 15,
          lineHeight: 17,
        }}
      >
        {" "}
        Continuar{" "}
      </Text>
    </TouchableHighlight>
  </View>
);

export default function onBoarding({navigation}) {

  return (
    <ShapesContainer>
      <View style={styles.container}>
        <Onboarding
          containerStyles={{
            borderBottomWidth: 1,
            borderBottomColor: "#333",
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
          nextLabel={"Continuar"}
          controlStatusBar={false}
          skipLabel={"Omitir"}
          bottomBarHighlight={false}
          DoneButtonComponent={Done}
          onSkip={() => navigation.navigate("Login")}
          flatlistProps={{
            style: {
              backgroundColor: "#FFFFFF",
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
            },
          }}
          onDone={() => navigation.navigate("Login")}
          pages={[
            {
              backgroundColor: "#ffff",
              color: "#162CA3",
              image: (<FirstScene />),
              title: "",
              subtitle: "",
            },
            {
              backgroundColor: "#ffff",
              image: (<SecondScene />),
              title: "",
              subtitle: "",
            },
            {
              backgroundColor: "#ffff",
              image: (<ThirdScene />),
              title: "",
              subtitle: "",
            },
          ]}
        />
      </View>
      <StatusBar style="dark" />
    </ShapesContainer>
  );
}
