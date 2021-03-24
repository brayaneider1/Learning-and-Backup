import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Brand, TextLinked } from '@ui';
import { LoginForm, SocialLogin, ShapesContainer, RestorePassword } from '@containers'
import { StatusBar } from 'expo-status-bar';
import style from './Login.style';

export default function LoginScreen({ navigation }) {
  const [isVisibleRestorePassword, setIsVisibleRestorePassword] = useState(false);

  return (
    <ShapesContainer>
      <StatusBar style="dark" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "height" : "height"}
          style={styles.container}
        >
          <View style={[style.logoWrapper]}>
            <Brand type={'gradient'} style={[style.logo]} />
          </View>
          <View style={[style.formWrapper]}>
            <LoginForm restorePasswordModal={() => setIsVisibleRestorePassword(true)} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View style={[style.bottomWrapper]}>
        <Text style={[style.socialLoginTitle]}> O ingresa usando</Text>
        <SocialLogin style={style.socialLogin} />
        <TextLinked
          style={style.signupLink}
          text={"¿No tienes una cuenta?"}
          textLink={"Regístrate"}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
      <RestorePassword hidden={isVisibleRestorePassword} setHidden={setIsVisibleRestorePassword} />
    </ShapesContainer >
  );
}
