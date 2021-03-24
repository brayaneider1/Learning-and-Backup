import React, { useState } from "react";
import { View, Text } from 'react-native';
import styles from "./agreement.style";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export default function Agreement() {
  const data = [
    {
      type: 'Casa en renta',
      name: 'Propiedad la clarita',
      state: 'Pago mensualidad'
    },
  ]
  function rectangleLessor() {
    return (
      <View style={styles.rectangleLessor}>
        <FontAwesome5 name="key" size={15} color="white" />
      </View>
    )
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cardPending}> 
        <Text style={styles.textPending}>Contrato pendiente en curso</Text>
        
        <AntDesign name="right" size={24} color="#fff" />

        </View>
        <ScrollView>
          {data.map(item =>
            <View style={styles.card}>
              <View style={styles.row}>
                {rectangleLessor()}
                <View style={styles.col}>
                  <Text style={styles.email}>{item.type}</Text>
                  <Text style={styles.type}>{item.name}</Text>
                  <Text style={styles.stateOpen}>{item.state}</Text>
                </View>
                <AntDesign name="right" size={30} color="#acacac" />
              </View>
            </View>)}
        </ScrollView>

      </View>
    </>
  );
}