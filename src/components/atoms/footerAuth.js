import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Typography, Colors } from '_styles'

const footerAuth = ({ isLoginScreen, footerDesc, footerTitle, onPressFunc }) => {

  return (
    <View
      style={[(isLoginScreen) ?
        styles.containerLogin :
        styles.containerRegister,
        styles.container
      ]}
    >
      <Text
        style={[(isLoginScreen) ?
          styles.descLoginStyle :
          styles.descRegisterStyle,
          Typography.FONT_REGULAR,
        ]}
      >
        {footerDesc}
      </Text>
      <Text
        style={styles.titleStyle}
        onPress={onPressFunc}
      >
        {footerTitle}
      </Text>
    </View>
  )
}

export default footerAuth

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  containerLogin: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  containerRegister: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  descLoginStyle: {
    marginEnd: 0,
    marginBottom: 8,
    fontSize: 16,
  },
  descRegisterStyle: {
    marginEnd: 8,
    marginBottom: 0,
    fontSize: 16,
  },
  titleStyle: {
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
  },
})
