import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { authActions } from '@services/Auth/AuthSlice';
import { Brand } from '@ui';
import styles from './Account.style.js'

export default function Account({ navigation }) {

  const [avatar, setAvatar] = useState(null);
  const { currentUserData } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };
  return (
    <View style={styles.container}>
      <Brand style={style.logo} />
      <Text style={styles.text}>Perfil</Text>
      <View style={styles.divider} />
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={avatar ? { uri: avatar } : require("../../../assets/avatar.png")} />
        </View>
        <View style={styles.uploadBox}>
          <TouchableOpacity onPress={openImagePickerAsync} >
            <FontAwesome name="pencil" size={20} color="#cfcfcf" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.dividerText} />
        {currentUserData &&
        <Text style={styles.textUser}>{currentUserData.profile.name} {currentUserData.profile.lastname}</Text>
        }
        <View style={styles.dividerText} />
      </View>
      <View style={styles.listItems} >
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.textItems}>Información personal</Text>
          <FontAwesome5 name="user" size={24} color="#cfcfcf" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.textItems}>Información laboral</Text>
          <FontAwesome5 name="user-tie" size={24} color="#cfcfcf" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.textItems}>Validación identidad</Text>
          <AntDesign name="checkcircleo" size={24} color="#cfcfcf" />
        </View>
        <View style={styles.divider} />
          <TouchableOpacity
            activeOpacity={.52}
            onPress={() => dispatch(authActions.logout())}
          >
            <Text style={styles.textItems}>Salir</Text>
          </TouchableOpacity>
      </View>

    </View>
  )
}