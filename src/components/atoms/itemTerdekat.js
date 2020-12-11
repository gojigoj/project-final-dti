import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Typography } from '_styles';
import { Colors } from '_styles';

const itemTerdekat = ({ item }) => {
  return (
    <View
      style={styles.container}
    >
      <Image
        source={{
          uri: item.url_cover
        }}
        style={styles.imageStyle}
      />
      <Text
        style={[
          styles.titleStyle,
          Typography.FONT_REGULAR
        ]}
        numberOfLines={1}
      >
        {item.name}
      </Text>
      <View
        style={styles.layoutWrapper}
      >
        <Icon
          name='location-on'
          size={14}
          color={Colors.PRIMARY}
          style={styles.smallIconStyle}
        />
        <Text
          style={[
            styles.descStyle,
            Typography.FONT_REGULAR
          ]}
        >
          {'3 Km' + ' ' + '(Semarang)'}
        </Text>
      </View>
    </View>
  )
}

export default itemTerdekat

const styles = StyleSheet.create({
  container: {
    marginEnd: 24,
    width: 160,
  },
  layoutWrapper: {
    flexDirection: 'row'
  },
  imageStyle: {
    borderRadius: 8,
    marginBottom: 8,
    width: 160,
    height: 72
  },
  titleStyle: {
    marginBottom: 4,
    fontSize: 10
  },
  smallIconStyle: {
    marginEnd: 4,
  },
  descStyle: {
    color: Colors.GRAY_DARK,
    fontSize: 10
  }
})
