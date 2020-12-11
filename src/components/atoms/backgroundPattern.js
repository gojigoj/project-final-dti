import React from 'react'
import { StyleSheet, View } from 'react-native'
import BgPattern from '_assets/images/bg_pattern.svg';

const backgroundPattern = () => {
  return (
    <View
      style={styles.container}
    >
      <BgPattern
        width='100%'
        height='100%'
      />
    </View>
  )
}

export default backgroundPattern

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})
