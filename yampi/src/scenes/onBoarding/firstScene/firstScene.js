import React from "react";
import { ImageBackground, View, Text, Image } from "react-native";
import { Brand } from '@ui';
import styles from './firstScene.style'

export default function Home() {
  return (
    <View style={styles.slide}>

      <Image style={{ resizeMode: "cover", width: "100%", height: "100%", position: "absolute", bottom: 0 }} source={require('../../../../assets/slide1.png')} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Brand style={styles.logo} />
        </View>
        <Text style={styles.description}>
          Genera y firma contratos digitales con todos
          los respaldos legales.
                   </Text>
        <Text style={styles.description}>
          ¡Y tienes nuestro apoyo jurídico
          si algo sale mal!
                   </Text>
      </View>
    </View>
  );
}
