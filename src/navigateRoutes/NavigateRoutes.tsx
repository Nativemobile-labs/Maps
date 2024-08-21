import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../components/SplashScreen';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import HomeScreen from '../components/HomeScreen';

const stack = createNativeStackNavigator();
const NavigateRoutes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <stack.Screen name="Splash" component={SplashScreen} />
        <stack.Screen name="Auth" component={Authentication} />
        <stack.Screen name="Home" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const Authentication = () => {
  return (
    <stack.Navigator initialRouteName="Login">
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="Signup" component={SignupScreen} />
    </stack.Navigator>
  );
}

export default NavigateRoutes

const styles = StyleSheet.create({})    