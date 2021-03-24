import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { propertiesActions } from '@services/Properties/PropertiesSlice';
import { Brand } from '@ui';
import { PopertyItemList, PopertyToolBar, PopertySearchBox } from '@containers';
import { StatusBar } from 'expo-status-bar';

import style from "./Properties.style";

export default function Properties({ navigation }) {

  const [searchVisible, setSearchVisible] = useState(false);
  const { properties, status, errormsg } = useSelector(state => state.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(propertiesActions.getAll({}))
  }, [])

  return (
    <>
      <PopertySearchBox
        visible={searchVisible}
        toggle={setSearchVisible}
        goToFilter={() => navigation.push('Filter')}
      />
      <View style={style.header}>
        <Brand style={style.logo} />
        <Text style={style.title}>Las Mejores Propiedades</Text>
        <PopertyToolBar
          searchToggle={setSearchVisible}
          goToFilter={() => navigation.push('Filter')}
        />
      </View>
      {
        properties.length >= 1 ?
          <FlatList
            style={style.list}
            data={properties}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) =>
              <PopertyItemList
                item={item}
                navigator={() => navigation.navigate('Property', {
                  propertyId: item.id,
                })}
              />
            }
          />
          :
          <View style={style.empty}>
            <Text>Nada que ver aquí todavía</Text>
          </View>
      }
      <StatusBar style="dark" />
    </>
  );
};