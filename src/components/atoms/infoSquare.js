import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Typography } from '_styles'

const infoSquare = ({ textInfo }) => {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={[
          styles.textStyle,
          Typography.FONT_REGULAR
        ]}
      >
        {textInfo}
      </Text>
    </View>
  )
}

export default infoSquare

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_LIGHTER,
    borderRadius: 4,
    paddingVertical: 12,
    width: '100%',
    marginBottom: 16, 
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
  },
  textStyle: {
    textAlign: 'center',
  }
})
