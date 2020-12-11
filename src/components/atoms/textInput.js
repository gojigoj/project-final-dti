import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Typography } from '_styles'

const textInput = ({ placeholder, isSecure, keyboardType }) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={isSecure}
      keyboardType={keyboardType}
      style={[styles.textInputBox, Typography.FONT_REGULAR]}
    />
  )
}

export default textInput

const styles = StyleSheet.create({
  textInputBox: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#C3C3C3',
    paddingHorizontal: 16,
    fontSize: 14,
    marginBottom: 16,
    fontFamily: '',
    backgroundColor: 'white'
  }
})
