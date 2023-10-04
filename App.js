import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import { StatusBar } from 'react-native';
import Profile from './Profile';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
         <StatusBar
        backgroundColor="#5417D7"
        barStyle="light-content" 
      />
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
