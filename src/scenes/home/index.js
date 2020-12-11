import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { ButtonRounded } from '_atoms'
import { HeaderHome, ListItemTerdekat, ListItemRestoranCategory } from '_molecules'
import { Colors, Typography } from '_styles'
import { DataDummy } from '_utils'

const index = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View
      style={styles.container}
    >
      <StatusBar
        backgroundColor={Colors.PRIMARY_LIGHT}
        hidden= {false}
      />
      <HeaderHome
        userName='John Doe'
        onPressSearch={() => {}}
        onPressHistory={() => {}}
        isNewNotif={true}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View
        style={styles.bodyWrapper}
        >
          <ListItemTerdekat
            data={DataDummy.DATA_RESTORAN.slice(0, 4)}
          />
          <ListItemRestoranCategory
            title={t('best_selling_resto')}
            data={DataDummy.DATA_RESTORAN}
          />
          <ListItemRestoranCategory
            title={t('cheapest_resto')}
            data={DataDummy.DATA_RESTORAN}
          />
          <ListItemRestoranCategory
            title={t('newest_resto')}
            data={DataDummy.DATA_RESTORAN}
          />
          <Text
            style={[
              styles.textStyle,
              Typography.FONT_SEMIBOLD
            ]}
            onPress={() => {}}
          >
            {t('see_all_resto')}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyWrapper: {
    paddingVertical: 24,
    paddingStart: 16,
  },
  textStyle: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 16,
    color: Colors.SECONDARY
  }
})
