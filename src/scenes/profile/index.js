import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { ButtonSquareOutline } from '_atoms'
import { HeaderProfile, ButtonGroupProfile } from '_molecules'
import { Colors } from '_styles'

const index = ({ navigation }) => {
  const { t } = useTranslation()
  return (
    <View
      style={styles.container}
    >
      <StatusBar
        backgroundColor={Colors.PRIMARY_LIGHT}
        hidden= {false}
      />
      <HeaderProfile />
      <View
        style={styles.bodyWrapper}
      >
        <View>
          <ButtonGroupProfile
            onPressEditProfile= {() => {}}
            onPressChangePass= {() => {}}
            onPressAboutUs= {() => {}}
          />
        </View>
        <ButtonSquareOutline
          buttonTitle={t('logout')}
          onPressFunc={() => {}}
        />
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  bodyWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: 'space-between',
    flex: 1,
  }
})
