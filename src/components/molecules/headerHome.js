import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Svg, { Circle } from 'react-native-svg';
import { useTranslation } from 'react-i18next'
import { FieldSearch } from '_atoms';
import { Colors, Typography } from '_styles';


const headerHome = ({ userName, isNewNotif, onPressSearch, onPressHistory}) => {
  const { t } = useTranslation();
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.layoutWrapper}
      >
        <View>
          <Text
            style={[
              styles.bigTextStyle,
              Typography.FONT_SEMIBOLD
            ]}
          >
            Hai, {userName}
          </Text>
          <Text
            style={[
              styles.smallTextStyle,
              Typography.FONT_REGULAR
            ]}
          >
            {t('app_slogan')}
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={onPressHistory}
        >
          <View>
            <Icon
              name='receipt'
              size={28}
              color='white'
              style={styles.iconStyle}
            />
            {isNewNotif &&
              <Svg
                height="12"
                width="12"
                style={styles.circleStyle}
              >
                <Circle cx="6" cy="6" r="6" fill={Colors.GREEN_DARK} />
              </Svg>
            }
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FieldSearch
        onPressFunc={onPressSearch}
      />
    </View>
  )
}

export default headerHome

const styles = StyleSheet.create({
  container: {
    padding: 16, 
    backgroundColor: Colors.PRIMARY,
  },
  layoutWrapper: {
    marginBottom: 16,
    color: 'black',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconStyle: {
    marginTop: 4,
  },
  bigTextStyle: {
    marginBottom: 4,
    fontSize: 24,
    color: 'white',
  },
  smallTextStyle: {
    color: 'white',
    fontSize: 12
  },
  circleStyle: {
    position: 'absolute',
    top: 2,
    right: -3,
  }
})
