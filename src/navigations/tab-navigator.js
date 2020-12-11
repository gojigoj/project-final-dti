import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '_styles';

// import screen
import HomeScreen from '_scenes/home';
import QrScreen from '_scenes/qrscan'
import ProfileScreen from '_scenes/profile'

const Tab = createBottomTabNavigator();

const tabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.PRIMARY,
        inactiveTintColor: Colors.GRAY_LIGHT,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'QrScan') {
            iconName = 'qr-code-scanner'
          } else if (route.name === 'Profile') {
            iconName = 'person'
          }

          return <Icon name={iconName} size={size} color={color} />
        }
      })}
      backBehavior='initialRoute'
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="QrScan" component={QrScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default tabNavigator
