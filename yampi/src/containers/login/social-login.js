import React from 'react';
import { View } from 'react-native';
import { SocialButton } from '@ui/buttons';
import style from './social-login.style';

export default function SocialLogin(props) {
  return (
    <View style={[style.container, props.style]}>
      <SocialButton
        type='facebook'
        onPressAction={() => { }}
      />
      <SocialButton
        type='google'
        onPressAction={() => { }}
      />
    </View>
  )
}