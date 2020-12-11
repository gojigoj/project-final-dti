import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';
import { Colors, Typography } from '_styles';

const itemRestoranType = ({ item }) => {
  const minPrice = Math.min.apply(Math, item.menu.map(function(o) { return o.harga }))
  const maxPrice = Math.max.apply(Math, item.menu.map(function(o) { return o.harga }))
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
      <View>
        <Text
          style={[
            styles.nameStyle,
            Typography.FONT_MEDIUM
          ]}
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <View
          style={styles.descWrapper}
        >
          <Icon
            name='location-on'
            size={14}
            color={Colors.PRIMARY}
            style={styles.iconStyle}
          />
          <Text
            style={styles.addressStyle}
          >
            {item.alamat.kecamatan + ', ' + item.alamat.kota}
          </Text>
        </View>
        <StarRating
          fullStar='star'
          fullStarColor={Colors.GOLD}
          emptyStar='star'
          emptyStarColor={Colors.GRAY_LIGHT}
          iconSet='FontAwesome'
          halfStarEnabled={false}
          disabled={true}
          rating={item.rating}
          starSize={14}
          containerStyle={{
            width: 80
          }}
        />
        <Text
          style={[
            styles.priceStyle,
            Typography.FONT_MEDIUM
          ]}
        >
          {minPrice + ' - ' + maxPrice}
        </Text>
      </View>
    </View>
  )
}

export default itemRestoranType

const styles = StyleSheet.create({
  container: {
    marginVertical:8,
    marginEnd: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 280,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 4,
  },
  descWrapper: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  imageStyle: {
    width: 72,
    height: 72,
    borderRadius: 8,
    marginEnd: 16,
  },
  nameStyle: {
    fontSize: 14,
    marginBottom: 4,
  },
  iconStyle: {
    marginEnd: 4,
  },
  addressStyle: {
    fontSize: 10,
  },
  priceStyle: {
    marginTop: 6,
    fontSize: 12,
  },
})
