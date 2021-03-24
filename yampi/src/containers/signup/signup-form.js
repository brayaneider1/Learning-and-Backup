import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { TextInputIcon } from '@ui';
import { GradientButton } from '@ui/buttons';
import { authActions } from '@services/Auth/AuthSlice'
import style from './signup-form.style';

export default function SignupForm() {

  const { control, handleSubmit, errors } = useForm({ mode: "all" });
  const { status, errormsg } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(authActions.signup(data))
  }

  return (
    <View style={[style.container]}>

      <View style={style.wrapperIpt}>
        
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInputIcon
              radius={50}
              placeholder="Nombre"
              icon="user"
              onChangeText={onChange}
              onFocus={() => { }}
              onBlur={onBlur}
              value={value}
              isError={errors?.profile?.name}
            />
          )}
          name="profile.name"
          rules={{ required: true }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInputIcon
              radius={50}
              placeholder="Apellido"
              icon="user"
              onChangeText={onChange}
              onFocus={() => { }}
              onBlur={onBlur}
              value={value}
              isError={errors?.profile?.lastname}
            />
          )}
          name="profile.lastname"
          rules={{ required: true }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInputIcon
              radius={50}
              placeholder="Correo"
              icon="mail"
              onChangeText={onChange}
              onFocus={() => { }}
              onBlur={onBlur}
              value={value}
              isError={errors.email}
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
              onChangeText={onChange}
              onBlur={onBlur}
              isError={errors.password}
              onFocus={() => { }}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
      </View>
      <GradientButton
        style={style.signupButton}
        textStyle={style.signupButtonText}
        radius={20}
        height={44}
        text="REGÍSTRATE"
        onPressAction={handleSubmit(onSubmit)}
      />
    </View>
  );
}

