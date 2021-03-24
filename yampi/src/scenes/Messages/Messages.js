import React from "react";
import { View, Text } from 'react-native';

export default function Messages() {

  return (
    <>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>Mensajes</Text>
      </View>
    </>
  );
}