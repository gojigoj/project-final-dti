import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { Colors, Typography } from '_styles'

const buttonSquareOutline = ({ buttonTitle, onPressFunc }) => {
  return (
    <TouchableHighlight
      onPress={onPressFunc}
      underlayColor={Colors.GRAY_LIGHTER}
      style={styles.container}
    >
      <Text
        style={[
          styles.titleStyle,
          Typography.FONT_BOLD
        ]}
      >
        {buttonTitle}
      </Text>
    </TouchableHighlight>
  )
}

export default buttonSquareOutline

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: Colors.PRIMARY,
    borderWidth: 2,
    paddingVertical: 10,
  },
  titleStyle: {
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontSize: 14,
  }
})
