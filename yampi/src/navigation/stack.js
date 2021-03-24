import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Yampicons } from '@ui';
import NavigatorBottom from "./bottom";
import { authActions } from '@services/Auth/AuthSlice';
import onBoarding from "../scenes/onBoarding/onBoarding";
import Login from "../scenes/Login/Login";
import Signup from '../scenes/Signup/Signup';
import style from './navigation.style';

const Stack = createStackNavigator();

export default function navigator() {

  const { isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.checkIsAuth());
  }, [isAuthenticated]);

  return (
    <NavigationContainer  >

      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {() => <NavigatorBottom />}
            </Stack.Screen>
          </>
        ) : (
            <>
              <Stack.Screen
                name="onBoarding"
                options={{ headerShown: false }}
                component={onBoarding}
              />
              <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Login}
              />
              <Stack.Screen
                name="Signup"
                options={{
                  headerShown: true,
                  title: '',
                  headerBackTitleVisible: false,
                  headerBackImage: () => (
                    <Yampicons
                      style={style.back}
                      name={'back'}
                    />
                  ),
                  headerStyle: style.header
                }}
                component={Signup}
              />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
