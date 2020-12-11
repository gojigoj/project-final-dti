import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import { Colors, Typography } from '_styles';

const fieldSearch = ({ onPressFunc }) => {
  const { t } = useTranslation();
  return (
    <TouchableHighlight
      onPress={onPressFunc}
      style={styles.container}
      underlayColor={Colors.GRAY_LIGHTER}
    >
      <View
        style={styles.layoutWrapper}
      >
        <Icon name='search' size={24} color={Colors.PRIMARY} />
        <Text
          style={[styles.textStyle, Typography.FONT_MEDIUM]}
        >
          {t('search_resto')}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

export default fieldSearch

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10
  },
  layoutWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    marginStart: 8,
    color: Colors.GRAY_LIGHT,
    fontSize: 12,
  }
})
