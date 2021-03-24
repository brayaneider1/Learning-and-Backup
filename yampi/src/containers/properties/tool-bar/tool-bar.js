
import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import share from '../../../common/utils/share';
import style from './tool-bar.style';

export default function PopertyToolBar({searchToggle, goToFilter}) {

  return(
    <View style={style.container}>
      <View style={style.location}>
        <Entypo style={style.locationPin} name="location-pin"/>
        <Text style={style.locationCity}>Bogotá D.C</Text>
      </View>

      <View style={style.wrapperIcons}>
      <TouchableOpacity onPress={() => searchToggle(true)} >
          <FontAwesome name="search" style={style.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToFilter()}>
          <FontAwesome name="filter" style={style.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={share}>
          <FontAwesome name="share-alt" style={style.icon} />
        </TouchableOpacity>
      </View>
  </View>
  )
}