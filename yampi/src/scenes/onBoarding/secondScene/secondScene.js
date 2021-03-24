import React from "react";
import { View, Text, Image } from "react-native";
import { Brand } from '@ui';
import styles from './secondScene.style'

export default function secondScene() {
  return (
    <View style={styles.slide}>

      <Image style={{ resizeMode: "cover", width: "100%", height: "100%", position: "absolute", bottom: 0 }} source={require('../../../../assets/slide2.png')} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Brand gradientBegin='#fff' gradientEnd='#fff' style={styles.logo} />
        </View>
        <Text style={styles.description}>
          Y nuestros servicio de
          mantenimientos también esta listo
          para apoyarte
            </Text>
      </View>
    </View>
  );
}
