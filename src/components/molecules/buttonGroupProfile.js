import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { ButtonSquareFill } from '_atoms'

const buttonGroupProfile = ({ onPressEditProfile, onPressChangePass, onPressAboutUs }) => {
  const { t } = useTranslation()
  return (
    <View
      style={styles.container}
    >
      <ButtonSquareFill
        titleButton={t('edit_profile')}
        iconState={0}
        onPressfunc={onPressEditProfile}
      />
      <ButtonSquareFill
        titleButton={t('change_pass')}
        iconState={1}
        onPressfunc={onPressChangePass}
      />
      <ButtonSquareFill
        titleButton={t('about_us')}
        iconState={2}
        onPressfunc={onPressAboutUs}
      />
    </View>
  )
}

export default buttonGroupProfile

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})
