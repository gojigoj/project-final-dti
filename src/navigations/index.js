import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import screen
import TabNavigator from '_navigations/tab-navigator';
import LoginScreen from '_scenes/login';
import RegisterScreen from '_scenes/register';
import { Colors } from '_styles';

const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
              backgroundColor: Colors.PRIMARY,
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerTintColor: 'white',
          headerBackTitleStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Main'
          component={TabNavigator}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index