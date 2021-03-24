import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { View, Text, Dimensions, ScrollView, TouchableHighlight } from 'react-native';
import { SliderBox, Yampicons } from '@ui';
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { API_URL } from '../../common/config/Environments';
import { GradientButton } from '@ui/buttons';
import { amenitieAsString, featuresAsString } from '../../common/utils/amenitie-as-string';
import style from './Detail.style';

export default function PropertyDetail({ navigation, route }) {
  const { propertyId } = route.params;
  const [amentiesPag, setAmentiesPag] = useState(2)
  const { height } = Dimensions.get('window')
  const { properties } = useSelector(state => state.properties);
  let property = properties.find(property => property.id == propertyId)
  let amenities = property.amenities.filter(amenitie => amenitie.is_enabled)
  let features = property.features
  let policies = property.policies.find(policie => policie.is_checked)
  console.log(features)
  return (
    <>
      <View style={style.container}>
        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false} >
          <View style={{ position: "absolute" }}>
            <SliderBox
              style={[style.image]}
              dotStyle={style.dotStyle}
              images={property.images.map((i) => { return API_URL + "/" + i.filepath + i.filename })}
              circleLoop={false}
              paginationBoxStyle={style.paginationStyle}
            />
          </View>
          <TouchableHighlight
            onPress={navigation.goBack}
            activeOpacity={1}
            underlayColor='#ccc'
            style={style.buttonBack} >
            <Yampicons
              style={style.back}
              name={'back'}
            />
          </TouchableHighlight>
          <View style={style.cardDetail}>
            <View style={style.cardDetailTitle}>
              <Text style={style.title}>{property.title}</Text>
              <TouchableHighlight
                onPress={navigation.goBack}
                activeOpacity={1}
                underlayColor='#ccc'
                style={style.buttonFav} >
                <MaterialIcons name="favorite-border" style={style.fav} />
              </TouchableHighlight>
            </View>
            <Text style={style.price}>$ {property.costs[0].value} COP</Text>
            <View style={style.directionContainer}>
              <Entypo name="location-pin" style={style.localizationPin} />
              <View>
                <Text style={style.address}>{property.localization.location.fullname}</Text>
                <Text style={style.address}>{property.localization.address}</Text>
              </View>
            </View>
            <View style={style.separator} />
            <View style={style.section}>
              <Text style={style.sectionTitle}>Caracteristicas</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={style.features}>
                  {features.map(features =>
                    <View key={features.id} style={style.featureItem}>
                      <Text style={style.featureQuantity}>{parseInt(features.quantity)}</Text>
                      <Text style={style.featureName}>{featuresAsString(features.feature_type.name)?.label}</Text>
                    </View>
                  )}
                </View>
              </ScrollView>
            </View>
            <View style={style.separator} />
            <View style={style.section}>
              <Text style={style.sectionTitle}>Comodidades</Text>
              <View style={style.SectionItems}>
                {amenities.map((amenitie, i) => {
                  return i < amentiesPag ? <View key={amenitie.id} style={style.sectionItem}>
                    <Text style={style.sectionItemName}>{amenitieAsString(amenitie.amenity_type.name).label}</Text>
                    <MaterialIcons name="favorite-border" style={style.fav} />
                  </View> : undefined
                }
                )}
              </View>
              {amentiesPag != amenities.length &&
                <TouchableHighlight underlayColor='#ccc' style={style.more} onPress={() => setAmentiesPag(amenities.length)}>
                  <Text>Mostrar las {amenities.length - amentiesPag} comodidades</Text>
                </TouchableHighlight>
              }
            </View>
            <View style={style.separator} />
            <View style={style.section}>
              <Text style={style.sectionTitle}>Politicas de mascotas</Text>
              <View style={style.sectionItems}>
                <View style={style.sectionItem}>
                  <Text style={style.sectionItemName}>{policies.policy_type.name == 'no_pets' ? 'Mascotas no permitidas' : 'Mascotas permitidas'}</Text>
                  <MaterialIcons name="favorite-border" style={style.fav} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={style.footerPay}>
        <View >
          <Text style={[style.price, { marginBottom: 3 }]}>$ {property.costs[0].value} COP</Text>
          <View style={[style.directionContainer, { marginBottom: 0 }]}>
            <Entypo name="location-pin" style={style.localizationPin} />
            <Text style={style.address}>{property.localization.address}</Text>
          </View>
        </View>
        <GradientButton
          style={style.signupButton}
          textStyle={style.signupButtonText}
          radius={10}
          height={44}
          width={100}
          text="Aplicar"
          onPressAction={() => true}
        />
        <StatusBar style="light" backgroundColor='#7171718a' />
      </View>
    </>
  );
}