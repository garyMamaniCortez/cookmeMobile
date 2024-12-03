import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LoginScreen, UserScreen, RecipeScreen, MessageScreen, HomeScreen, RegisterScreen} from './src';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Register'
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
        <Tab.Screen name='Home' component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
