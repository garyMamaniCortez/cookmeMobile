import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LoginScreen } from './src';
import { Navbar } from './components';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Login'
        screenOptions={{ headerShown: false, tabBarButton: () => null }}
      >
        <Tab.Screen name='Login' component={LoginScreen}/>
      </Tab.Navigator>
      <Navbar/>
    </NavigationContainer>
  );
}
