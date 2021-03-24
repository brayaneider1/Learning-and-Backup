import React from "react";
import { View, Text, Image } from "react-native";
import { Brand } from '@ui';
import styles from './thirdScene.style'

export default function Home() {
  return (
    <View style={styles.slide}>

      <Image style={{ resizeMode: "cover", width: "100%", height: "100%", position: "absolute", bottom: 0 }} source={require('../../../../assets/slide3.png')} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Brand gradientBegin='#fff' gradientEnd='#fff' style={styles.logo} />
        </View>
        <Text style={styles.description}>
          Recibe tu pago en el
          momento en el que el
          arrendatario paga
          </Text>
        <Text style={styles.description}>
          ¡Sin altas coomisiones
          de intermediarios!
          </Text>
      </View>
    </View>
  );
}
