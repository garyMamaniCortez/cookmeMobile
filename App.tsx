import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AddRecipeScreen, LoginScreen, UserScreen, RecipeScreen, MessageScreen, HomeScreen, SearchScreen, RegisterScreen } from './src';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarButton: () => null, 
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tab.Screen name='Recipe' component={RecipeScreen} />
        <Tab.Screen name='Message' component={MessageScreen} />
        <Tab.Screen name='Login' component={LoginScreen} />
        <Tab.Screen name='Register' component={RegisterScreen} />
        <Tab.Screen name='User' component={UserScreen} />
        <Tab.Screen name='Add' component={AddRecipeScreen} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
