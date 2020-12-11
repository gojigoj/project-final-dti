import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '_styles';

const headerProfile = () => {
  return (
    <View
      style= {styles.container}
    >
      <View
        style={styles.imageWrapper}
      >
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://dummyimage.com/400x400/F2F2F2/000000'
          }}
        />
        <View
          style={styles.iconBackgroundStyle}
        >
          <View
            style={styles.iconWrapper}
          >
            <Icon
              name='edit'
              size={16}
              color={Colors.PRIMARY}
            />
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.profileInfoText,
          { marginBottom: 8 }
        ]}
      >
        Ghazi Ahmad Fadhlullah
      </Text>
      <Text
        style={styles.profileInfoText}
      >
        081234567890
      </Text>
    </View>
  )
}

export default headerProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    padding: 24,
    alignItems: 'center'
  },
  imageWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 16
  },
  iconBackgroundStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 24,
    width: 24,
    height: 24,
  },
  iconWrapper:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfoText: {
    fontSize: 18,
    color: 'white',
  }
})
