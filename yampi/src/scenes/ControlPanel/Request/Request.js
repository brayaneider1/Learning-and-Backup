import React, { useState } from "react";
import { View, Text } from 'react-native';
import styles from "./Request.style";
import { FontAwesome5,AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export default function Request() {
  const data = [
    {
      email: 'sebastian.rojas@yampi.com',
      type: 'Arrendatario',
      state: 'Abierto'
    },
    {
      email: 'sebastian.rojas@yampi.com',
      type: 'Deudor solidario',
      state: 'Cerrado'
    },
    {
      email: 'sebastian.rojas@yampi.com',
      type: 'Arrendatario',
      state: 'Abierto'
    },
    
  ]
  function rectangleLessor() {
    return (
      <View style={styles.rectangleLessor}>
        <FontAwesome5 name="key" size={15} color="white" />
      </View>
    )
  }
  function rectangleDebtor() {
    return (
      <View style={styles.rectangleDebtor}>
        <FontAwesome5 name="key" size={15} color="white" />
      </View>)
  }
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {data.map(item =>
            <View style={styles.card}>
              <View style={styles.row}>
                {item.type == "Arrendatario" ? rectangleLessor() : rectangleDebtor()}
                <View style={styles.col}>
                  <Text style={styles.email}>{item.email}</Text>
                  <Text style={styles.type}>{item.type}</Text>
                  <Text style={item.state == 'Abierto' ? styles.stateOpen : styles.stateClose}>{item.state}</Text>
                </View>
                <AntDesign name="right" size={30} color="#acacac" />
              </View>
            </View>)}
        </ScrollView>

      </View>
    </>
  );
}