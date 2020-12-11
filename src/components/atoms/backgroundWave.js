import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WaveTop from '_assets/images/wave_top.svg';
import WaveBottom from '_assets/images/wave_bottom.svg';

const backgroundWave = ({ isTopTransparent }) => {
  return (
    <View
      style={styles.container}
    >
      <View
        style={{
          marginTop: 51,
        }}
      >
        <WaveTop
          width='100%'
          height='100%'
          style={
            (isTopTransparent) ? 
              styles.transparentStyle
              :
              styles.nonTransparentStyle
          }  
        />
      </View>
      <View
        style={{
          marginBottom: 51
        }}
      >
        <WaveBottom
          width='100%'
          height='100%'
        />
      </View>
    </View>
  )
}

export default backgroundWave

const styles = StyleSheet.create({
  container: {
    flex:1, 
    flexDirection: 'column',
    justifyContent: 'center',
  },
  transparentStyle: {
    opacity: 0,
  },
  nonTransparentStyle: {
    opacity: 1,
  },
})
