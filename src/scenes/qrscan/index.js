import React from 'react'
import { StyleSheet, Image, View, TouchableWithoutFeedback } from 'react-native'
import { useTranslation } from 'react-i18next'
import { BackgroundPattern, BackgroundWave, InfoSquare } from '_atoms'

const index = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View
      style={styles.container}
    >
      <BackgroundPattern />
      <View
        style={styles.waveWrapper}
      >
        <BackgroundWave
          isTopTransparent={false}
        />
        <View
          style={styles.qrWrapper}
        >
          <InfoSquare
            textInfo={t('qr_info')}
          />
          <TouchableWithoutFeedback>
            <Image
              style={{
                width: 360,
                height: 360
              }}
              source={{
                uri: 'https://dummyimage.com/400x400/C4C4C4/000000'
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  waveWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  qrWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24
  }
})
