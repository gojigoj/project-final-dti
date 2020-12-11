import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next';
import { Typography } from '_styles';
import { Colors } from '_styles';

const titleApp = () => {
  const { t } = useTranslation();
  return (
    <View
      style={styles.container}
    >
      <Text
        style={[styles.titleStyle]}
      >
        {t('app_name')}
      </Text>
      <Text
        style={[styles.sloganStyle, Typography.FONT_REGULAR]}
      >
        {t('app_slogan')}
      </Text>
    </View>
  )
}

export default titleApp

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 60
  },
  titleStyle: {
    color: Colors.PRIMARY,
    fontSize: 24,
    marginBottom: 4,
    fontFamily: 'Raleway-Bold'
  },
  sloganStyle: {
    color: Colors.GRAY_DARK,
    fontSize: 14,
  }
})
