import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import EditProfileIcon from '_assets/images/ic_edit_profile.svg';
import ChangePassIcon from '_assets/images/ic_change_pass.svg';
import AboutUsIcon from '_assets/images/ic_about_us.svg';
import { Colors,Typography } from '_styles';


const buttonSquareFill = ({ titleButton, iconState, onPressfunc }) => {
  return (
    <TouchableHighlight
      onPress={onPressfunc}
      underlayColor={Colors.PRIMARY_DARK}
      style={{
        borderRadius: 10,
        marginBottom: 16
      }}
    >
      <View
        style={styles.container}
      >
        <View
          style={styles.layoutWrapper}
        >
          {
            (iconState == 0) ?
            <EditProfileIcon
              width={32}
              height={32}
            />
            :
            (iconState == 1) ?
            <ChangePassIcon
              width={32}
              height={32}
            />
            : 
            <AboutUsIcon
              width={32}
              height={32}
            />
          }
          <Text
            style={[
              styles.titleStyle,
              Typography.FONT_MEDIUM
            ]}
          >
            {titleButton}
          </Text>
        </View>
        <Icon
          name='keyboard-arrow-right'
          size={24}
          color='white'
        />
      </View>
    </TouchableHighlight>
  )
}

export default buttonSquareFill

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10, 
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'space-between',
  },
  layoutWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleStyle: {
    color: 'white',
    fontSize: 14,
    marginStart: 16,
  },
})
