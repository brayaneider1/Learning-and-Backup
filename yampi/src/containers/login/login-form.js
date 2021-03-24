import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { TextInputIcon } from '../../components';
import { GradientButton } from '@ui/buttons';
import { authActions } from '@services/Auth/AuthSlice'
import style from './login-form.style';

export default function LoginForm(props) {

  const { control, handleSubmit, errors } = useForm({ mode: "all" });
  const { status, errormsg } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(authActions.login(data))
  }
  return (
    <View style={[style.container]}>

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInputIcon
            radius={50}
            placeholder="Correo"
            heigth={50}
            isError={errors.email}
            icon="user"
            onChangeText={onChange}
            onFocus={() => { }}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInputIcon
            radius={50}
            placeholder="Contraseña"
            icon="lock"
            heigth={50}
            isError={errors.password}
            onChangeText={onChange}
            onBlur={onBlur}
            onFocus={() => { }}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />

      <TouchableOpacity
        style={[style.forgotPasswordTouchable]}
        activeOpacity={.52}
        onPress={() => { props.restorePasswordModal(true) }}
      >
        <Text style={[style.forgotPasswordText]}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <GradientButton
        style={style.signupButton}
        textStyle={style.signupButtonText}
        radius={20}
        height={44}
        text="INICIAR SESIÓN"
        onPressAction={handleSubmit(onSubmit)}
      />
    </View>
  );
}

