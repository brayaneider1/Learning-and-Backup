import React, { useRef, useEffect } from "react";
import { View, Text, Animated, TouchableOpacity, TextInput } from "react-native";
import _ from "lodash";
import { useDispatch } from 'react-redux';
import { propertiesActions } from '@services/Properties/PropertiesSlice';
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import share from '../../../common/utils/share';
import styles from './search-box.style'

export default function PopertySearchBox({ visible, toggle, goToFilter }) {
  
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const searchInput = useRef(null);
  const spring = () => {
    Animated.spring(
      fadeAnim,
      {
        toValue: 0,
        velocity: 10,
        tension: 16,
        friction: 6,
        useNativeDriver: true
      }
    ).start();
  }

  const springOut = () => {
    Animated.spring(
      fadeAnim,
      {
        toValue: -150,
        velocity: 10,
        tension: 16,
        friction: 6,
        useNativeDriver: true
      }
    ).start();
  }

  useEffect(() => {
    if (visible) {
      spring()
      searchInput.current.focus()
    } else {
      springOut()
    }
  }, [visible])

  const search = _.debounce((name) => {
    if (name) {
      dispatch(propertiesActions.search({name: name}));
    } else if (name === '') {
      dispatch(propertiesActions.getAll({}))
    }
  }, 200);

  const close = () => {
    dispatch(propertiesActions.getAll({}))
    toggle(!visible)
    searchInput.current.blur();
    searchInput.current.clear();
  }

  return (
    <Animated.View style={[styles.container, {
      transform: [{ translateY: fadeAnim }]
    }]} >
      <View style={styles.toolbar}>
        <View style={styles.leading} >
          <TouchableOpacity onPress={() => close()}>
            <EvilIcons name="close" style={styles.close} />
          </TouchableOpacity>
          <Text style={styles.title}>Búsqueda</Text>
        </View>
        <View style={styles.actions} >
          <View style={styles.wrapperIcons}>
          <TouchableOpacity onPress={() => goToFilter()}>
              <FontAwesome name="filter" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={share} >
              <FontAwesome name="share-alt" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.searchBox}>
        <View style={styles.inputSearch}>
          <FontAwesome name="search" style={styles.iconSearch} />
          <TextInput
            ref={searchInput}
            placeholder="Encuentra tu inmueble"
            style={styles.searchTextfield}
            placeholderTextColor={"#000"}
            onChange={(event) => search(event.nativeEvent.text)}
            onSubmitEditing={(event) => search(event.nativeEvent.text)}
          />
        </View>
      </View>
    </Animated.View >
  )
}