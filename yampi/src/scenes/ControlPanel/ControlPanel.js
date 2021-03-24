import React, { useState } from "react";
import { Brand } from '@ui';
import { View, Text } from 'react-native';
import styles from "./ControlPanel.style";
import request from "./Request/Request"
import calendar from './Calendar/Calendar'
import agreement from './agreement/agreement'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
export default function ControlPanel() {
  const [counter, setCounter] = useState(3)
  const tabRequest = (props) => {
    return (
      <View style={styles.dot}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 9 }}>{props}</Text>
      </View>
    )
  }
  return (
    <>
      <View style={styles.header}>
        <Brand style={styles.logo} />
        <Text style={styles.title}>Panel de control</Text>
      </View>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          showIcon: true,
          activeTintColor: '#000',
          inactiveTintColor: '#afafaf',
          indicatorStyle: { backgroundColor: '#000', },
          labelStyle: styles.tabBarLabel,
          style: styles.tabBarOptions,
          tabStyle: styles.tabs
        }}>
        <Tab.Screen name="Feed" component={request} options={{ tabBarLabel: 'Solicitudes', tabBarIcon: () => tabRequest(3) }} />
        <Tab.Screen name="Notifications" component={agreement} options={{ tabBarLabel: 'Contratos', tabBarIcon: () => tabRequest(1) }} />
        <Tab.Screen name="calendar" component={calendar} options={{ tabBarLabel: 'Eventos', tabBarIcon: () => tabRequest(1) }} />
      </Tab.Navigator>
    </>
  );
}