import React, { useState } from "react";
import { View, Text, TouchableOpacity, CheckBox, ScrollView } from "react-native";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import RangeSlider from "../../components/slider-range/slider-range.js";
import styles from "./Filter.style";

export default function PropertyFilter({ navigation }) {
  const [priceMin, setPriceMin] = useState(500000);
  const [priceMax, setPriceMax] = useState(10000000);
  const [sizeMin, setSizeMin] = useState(60);
  const [sizeMax, setSizeMax] = useState(1000);
  const [bedroom, setBedroom] = useState(2);
  const [bathroom, setBathroom] = useState(2);

  return (
    <>
      <View style={styles.content}>
        <View style={styles.leading}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <EvilIcons name="close" style={styles.close} />
          </TouchableOpacity>
          <Text style={styles.title}>Filtros</Text>
        </View>
        <ScrollView style={{}} >
          <Text style={styles.text}>Rango de precios</Text>
          <View style={styles.leading}>
            <Text style={styles.grayText}> {priceMin} COP -</Text>
            <Text style={styles.grayText}> {priceMax} COP</Text>
          </View>
          <View style={styles.slide} >
            <RangeSlider
              fromValueOnChange={setPriceMin}
              toValueOnChange={setPriceMax}
              step={50000}
              min={500000}
              max={10000000}
              styleSize="small"
              showRangeLabels={false}
              showValueLabels={false}
            />
          </View>
          <View style={styles.divider} />
          <Text style={styles.text}>Habitaciones y Baños</Text>
          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={styles.text}>Habitaciones</Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setBedroom(bedroom - 1)}>
                <AntDesign name="minuscircleo" size={24} color="gray" />
              </TouchableOpacity>
              <Text style={styles.textCounter}>{bedroom}</Text>
              <TouchableOpacity onPress={() => setBedroom(bedroom + 1)}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={styles.text}>Baños</Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setBathroom(bathroom - 1)}>
                <AntDesign name="minuscircleo" size={24} color="gray" />
              </TouchableOpacity>
              <Text style={styles.textCounter}>{bathroom}</Text>
              <TouchableOpacity onPress={() => setBathroom(bathroom + 1)}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />
          <View style={styles.row}>
            <View>
              <Text style={styles.text}>Política de mascotas</Text>
              <Text style={styles.grayText}>Admite mascotas</Text>
            </View>
            <CheckBox />
          </View>
          <View style={styles.divider} />
          <Text style={styles.text}>Tipo de inmueble</Text>
          <View style={styles.row}>
            <Text style={styles.grayText}>Apartamento</Text>
            <CheckBox />
          </View>
          <View style={styles.row}>
            <Text style={styles.grayText}>Casa</Text>
            <CheckBox />
          </View>

          <Text style={styles.text}>Tamaño</Text>
          <View style={styles.leading}>
            <Text style={styles.grayText}> {sizeMin} M2 -</Text>
            <Text style={styles.grayText}> {sizeMax} M2</Text>
          </View>
          <View style={styles.slide} >
            <RangeSlider
              fromValueOnChange={setSizeMin}
              toValueOnChange={setSizeMax}
              step={1}
              min={60}
              max={1000}
              styleSize="small"
              showRangeLabels={false}
              showValueLabels={false}
            />
          </View>

        </ScrollView>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.grayText}>Borrar todos</Text>
          <View>
            <GradientButton
            style={style.signupButton}
            textStyle={style.signupButtonText}
            radius={10}
            height={44}
            width={100}
            text="Aplicar"
            onPressAction={() => true}
          />
          </View>
        </View>
      </View>
    </>
  );
}