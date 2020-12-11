import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { ItemTerdekat } from '_atoms'
import { Typography } from '_styles'

const listItemTedekat = ({ data }) => {
  const { t } = useTranslation();
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
        {t('resto_nearby')}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemTerdekat
            item = {item}
          />
        )}
        // ListHeaderComponent={
        //   <View>
        //     <Text
        //       style={[
        //         styles.titleStyle,
        //         Typography.FONT_SEMIBOLD
        //       ]}
        //     >
        //       {t('resto_nearby')}
        //     </Text>
        //   </View>
        // }
        // stickyHeaderIndices={[0]}
      />
    </View>
  )
}

export default listItemTedekat

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  titleStyle: {
    fontSize: 14,
    marginBottom: 16,
  }
})
