import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LoginScreen, UserScreen } from './src';
import { Navbar } from './components';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='User'
        screenOptions={{
          headerShown: false,
          tabBarButton: () => null, 
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tab.Screen name='Login' component={LoginScreen} />
        <Tab.Screen name='User' component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
