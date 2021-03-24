import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { CustomModal } from "../../components/Modal"
import { TextInputIcon } from '@ui';
import { GradientButton } from '@ui/buttons';
import { authActions } from '@services/Auth/AuthSlice'
import styles from './restore-password.style';

export default function RestorePassword({ hidden, setHidden }) {

  const { control, handleSubmit, errors } = useForm({ mode: "all" });
  const { status, errormsg } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(authActions.recoveryPassword(data))
  }

  return (
    <CustomModal isVisible={hidden} setHidden={setHidden}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Restablece tu contraseña</Text>
          <Text style={styles.subtitle}>¿Cual es tu correo electrónico?</Text>
          <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInputIcon
              textContentType='emailAddress'
              autoCapitalize = 'none'
              radius={50}
              placeholder="Correo"
              icon="mail"
              borderWidth={1}
              borderColor= "#E2E2E2"
              height={60}
              iconSize={20}
              isError={errors.email}
              onChangeText={onChange}
              onFocus={() => { }}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
          />
        </View>
        <GradientButton
          style={styles.signupButton}
          textStyle={styles.signupButtonText}
          gradientBeggin='#57157D'
          gradientEnd='#57157D'
          height={54}
          width={'100%'}
          text="Restablecer Contraseña"
          onPressAction={handleSubmit(onSubmit)}
        />
      </View>

    </CustomModal >
  )
}