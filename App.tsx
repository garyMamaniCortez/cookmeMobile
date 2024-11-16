import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LoginScreen, RecipeScreen, UserScreen } from './src';
import { Navbar } from './components';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Recipe'
        screenOptions={{
          headerShown: false,
          tabBarButton: () => null, 
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tab.Screen name='Login' component={LoginScreen} />
        <Tab.Screen name='User' component={UserScreen} />
        <Tab.Screen name='Recipe' component={RecipeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
