import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { SliderBox } from '@ui';
import style from './item-list.style';
import { API_URL } from '../../../common/config/Environments';

export default function PopertyItemList({ item, navigator }) {
  
  return (
    <TouchableHighlight activeOpacity={1} underlayColor={'white'} onPress={() => navigator()}>
      <View>
        <SliderBox
          style={style.image}
          images={item.images.map((i) => { return API_URL + "/" + i.filepath + i.filename })}
          circleLoop={false}
          paginationBoxStyle={style.paginationStyle}
        />
        <View style={style.card}>
          <View style={style.wrapperTitle}>
            <Text style={style.title}>{item.title}</Text>
            <TouchableOpacity>
              <MaterialIcons name="favorite-border" style={style.fav} />
            </TouchableOpacity>
          </View>
          <Text style={style.price}>$ {item.costs[0].value} COP</Text>
          <View style={style.localization}>
            <Entypo name="location-pin" style={style.localizationPin} />
            <Text style={style.address}>{item.localization.address}</Text>
          </View>
          <View style={style.features}>
            <View style={style.featureBox}>
              <Text style={style.featureText}>{parseInt(item.features[0].quantity)} Cuartos</Text>
            </View>
            <View style={style.featureBox}>
              <Text style={style.featureText}>{parseInt(item.features[1].quantity)} Baños</Text>
            </View>
            <View style={style.featureBox}>
              <Text style={style.featureText}>{parseInt(item.features[2].quantity)} Cocina</Text>
            </View>
            <View />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}