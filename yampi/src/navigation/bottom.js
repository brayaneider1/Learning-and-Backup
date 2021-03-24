import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Yampicons } from '@ui';
import PropertiesStackScreen from '../scenes/Properties/Stack';
import Messages from '../scenes/Messages/Messages';
import ControlPanel from '../scenes/ControlPanel/ControlPanel';
import Account from '../scenes/Account/Account';

import style from './navigation.style';

const Tab = createBottomTabNavigator();
const TabBarOptions = {
  activeTintColor: '#57157D',
  inactiveTintColor: '#000000',
  style: style.tabBarStyle,
  iconStyle: style.tabBarIconStyle,
  labelStyle: style.tabBarLabelStyle,
  keyboardHidesTabBar: true
}

export default function NavigatorBottom() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcons(route, color, size),
      })}
      tabBarOptions={TabBarOptions}
    >
      <Tab.Screen
        name="Inmuebles"
        component={PropertiesStackScreen}
        options={({ route }) => ({
          tabBarVisible: this.getTabBarVisibility(route)
        })}
      />
      <Tab.Screen
        name="Mensajes"
        component={Messages}
      />
      <Tab.Screen 
        name="Panel de Control"
        component={ControlPanel}
      />
      <Tab.Screen
        name="Cuenta"
        component={Account}
      />
    </Tab.Navigator>
  );
}
getTabBarIcons = (route, color, size) => {
  let iconName;
  switch (route.name) {
    case 'Inmuebles':
      iconName = 'home';
      break
    case 'Mensajes':
      iconName = 'message';
      break
    case 'Panel de Control':
      iconName = 'control-panel';
      break
    case 'Cuenta':
      iconName = 'account';
      break
    default:
      return true
  }
  return <Yampicons name={iconName} size={size} color={color} />;
}

getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Filter':
      return false;
    case 'Property':
      return false;
    default:
      return true
  }
}