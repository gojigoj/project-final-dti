import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next';
import { TextInput } from '_atoms'
import { TextInputParams } from '_utils';

const textInputGroupLogin = () => {
  const { t } = useTranslation();
  return (
    <View
      styles={styles.container}
    >
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
    </View>
  )
}

export default textInputGroupLogin

const styles = StyleSheet.create({
  container: {
    marginBottom: 34,
  }
})
