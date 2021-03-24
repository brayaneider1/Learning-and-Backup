import React, { useState } from "react";
import { View, Text, Dimensions, Platform } from 'react-native';
import styles from "./Calendar.style";
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars';
const { width } = Dimensions.get("window");
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';




export default function calendar() {
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
  LocaleConfig.locales['fr'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'JUnio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    dayNames: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    dayNamesShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    today: 'Agosto\'L'
  };
  LocaleConfig.defaultLocale = 'fr';
  return (
    <>
      <View style={styles.container}>
        <View style={styles.calendar}>
          <Calendar
            markedDates={{
              '2020-08-16': { selected: true, selectedColor: '#58167D' }
            }}
            style={{
              height: '100%',
              width: width / 1.4,
              paddingBottom: 10
            }} theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#58167D',
              textSectionTitleDisabledColor: '#6C4092',
              selectedDayBackgroundColor: '#58167D',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#a5a5a5',
              dayTextColor: '#acacac',
              textDisabledColor: 'transparent',
              dotColor: '#58167D',
              selectedDotColor: '#ffffff',
              arrowColor: '#58167D',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: '#58167D',
              indicatorColor: '#58167D',
              textDayFontFamily: 'Montserrat_medium',
              textMonthFontFamily: 'Montserrat_medium',
              textDayHeaderFontFamily: 'Montserrat_medium',
              textDayFontSize: 8,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 12,
              "stylesheet.day.basic": {
                base: { height: 25, width: 25, alignItems: 'center' }, text: {
                  padding: Platform.OS === 'android' ? 2 : 2,
                  color: '#acacac',
                },
              }
            }} />
        </View>
        <ScrollView style={styles.content}>
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