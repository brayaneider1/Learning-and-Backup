import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Properties from './Properties';
import Property from './Detail';
import Filter from './Filter';

const PropertiesStack = createStackNavigator();

export default function PropertiesStackScreen() {
  return (
    <PropertiesStack.Navigator>
      <PropertiesStack.Screen name="Properties" component={Properties} options={{ headerShown: false }}/>
      <PropertiesStack.Screen name="Property" component={Property} options={{ headerShown: false }}/>
      <PropertiesStack.Screen name="Filter" component={Filter} options={{ headerShown: false }}/>
    </PropertiesStack.Navigator>
  );
}