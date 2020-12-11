import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next';
import { TextInput } from '_atoms'
import { TextInputParams } from '_utils';

const textInputGroupRegister = () => {
  const { t } = useTranslation();
  return (
    <View
      style={styles.container}
    >
      <TextInput
        placeholder={t('name')}
        isSecure={false}
        keyboardType={TextInputParams.DEFAULT_TYPE}
      />
      <TextInput
        placeholder={t('email')}
        isSecure={false}
        keyboardType={TextInputParams.EMAIL_TYPE}
      />
      <TextInput
        placeholder={t('password')}
        isSecure={true}
        keyboardType={TextInputParams.DEFAULT_TYPE}
      />
      <TextInput
        placeholder={t('no_hp')}
        isSecure={false}
        keyboardType={TextInputParams.PHONE_TYPE}
      />
      
    </View>
  )
}

export default textInputGroupRegister

const styles = StyleSheet.create({
  container: {
    marginBottom: 34,
  }
})
