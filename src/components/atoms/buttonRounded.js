import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Typography } from '_styles'
import { Colors } from '_styles'

const buttonRounded = ({onPressFunc, buttonText}) => {
  return (
    <TouchableHighlight
      onPress={onPressFunc}
      style={styles.buttonStyle}
      underlayColor={Colors.PRIMARY_DARK}
    >
      <Text
          style={[styles.buttonText, Typography.FONT_MEDIUM]}
        >
          {buttonText}
        </Text>
    </TouchableHighlight>
  )
}

export default buttonRounded

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 16,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
    marginBottom: 16
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase'
  }
})
