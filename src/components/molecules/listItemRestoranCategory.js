import React from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import { ItemRestoranCategory } from '_atoms'
import { Typography } from '_styles'

const listItemRestoranCategory = ({title, data}) => {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={[
          styles.titleStyle,
          Typography.FONT_SEMIBOLD
        ]}
      >
        {title}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemRestoranCategory
            item = {item}
          />
        )}
      />
    </View>
  )
}

export default listItemRestoranCategory

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  titleStyle: {
    fontSize: 14,
    marginBottom: 8,
  }
})
