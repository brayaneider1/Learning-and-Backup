import React from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { ShapesContainer, SignupForm } from '@containers'
import { TextLinked } from '@ui';
import style from './Signup.style';

export default function LoginScreen({ navigation }) {
  return (
    <ShapesContainer>
      <ScrollView >
        <View
          /* behavior={Platform.OS == "ios" ? "height" : "height"} */
          style={styles.container}
        >
          <View style={[style.titleWrapper]}>
            <Text style={[style.title]}>Regístrate</Text>
            <Text style={[style.subTitle]}>Crea una cuenta y empieza a usar Yampi</Text>
          </View>

          <View style={[style.formWrapper]}>
            <SignupForm />
          </View>
        </View>
        <View style={[style.bottomWrapper]}>
          <TextLinked
            text={"¿Ya tienes una cuenta?"}
            textLink={"Ingresa aquí"}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </ShapesContainer>
  )
}
